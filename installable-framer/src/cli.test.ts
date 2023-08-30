import tmp from 'tmp'
import path from 'path'
import { test, expect } from 'vitest'
import { bundle } from './exporter.js'

test('bundle', async () => {
    const tempFolder = tmp.dirSync({ unsafeCleanup: true }).name
    console.log('tempFolder', tempFolder)
    const url = 'https://framer.com/m/Pricing-Table-9kxI.js@NDWJBIQUoNPAR7okuHyI'
    const { files, packageJson } = await bundle({
        url,
        cwd: tempFolder,
    })
    console.log(tempFolder)
}, 1000 * 10)
