/**
 * 根据action_def创建actions
 */

import fs from 'fs'
import path from 'path'

const actionsJsFilePath = path.join(__dirname, "../src/actions/index.js")
const constantsJsFilePath = path.join(__dirname, "../src/actions/constants.js")


function createDir(dir) {
    if (!fs.existsSync(dir)) {
        createDir(path.basename(dir))
        fs.mkdirSync(dir)
    }
}

function openFile(file) {
    if (fs.existsSync(file))
        fs.unlinkSync(file)
    else
        createDir(path.basename(file))

    return fs.openSync(file, "w")

}

function* contentGenerator(setting, entryList) {
    yield setting.headFormat(entryList)
    for (let entry of entryList) {
        yield setting.entryFormat(entry)
    }
}

const writer = settings => entryList => {
    settings.forEach(s => {
        const g = contentGenerator(s, entryList)
        const fd = openFile(s.path)
        for (let line of g) {
            fs.writeSync(fd, line)
        }
        fs.closeSync(fd)
    })
}

const regex = /[A-Z]?[a-z]+/g
const camelCaseConvert = str => str.match(regex).map(s => s.toUpperCase()).join("_")

const list = fs.readFileSync(path.resolve(__dirname, "../src/action_def.txt")).toString().trim().split("\n").map(str => [str, camelCaseConvert(str)])

writer([
    {
        path: actionsJsFilePath,
        headFormat: entryList => "import {createAction} from 'redux-act'\nimport * as Const from './constants'\n\n",
        entryFormat: entry => {
            if (/.*Request/.test(entry[0]))
                return `export const ${entry[0]} = createAction(Const.${entry[1]})\nexport const ${entry[0].replace(/Request/, 'Success')} = createAction(Const.${entry[1].replace(/REQUEST/, 'SUCCESS')})\n\n`
            else
                return `export const ${entry[0]} = createAction(Const.${entry[1]})\n\n`
        }
    },
    {
        path: constantsJsFilePath,
        headFormat: entryList => "",
        entryFormat: entry => {
            if (/.*REQUEST/.test(entry[1]))
                return `export const ${entry[1]} = '${entry[1]}'\nexport const ${entry[1].replace(/REQUEST/, 'SUCCESS')} = '${entry[1].replace(/REQUEST/, 'SUCCESS')}'\n\n`
            else
                return `export const ${entry[1]} = '${entry[1]}'\n`
        }
    }
])(list)

