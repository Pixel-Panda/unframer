import tmp from 'tmp'
import path from 'path'
import { test, expect } from 'vitest'
import { bundle, componentCamelCase, extractTokenInfo } from './exporter.js'

test('componentCamelCase', () => {
    expect(componentCamelCase('logo-ticker')).toMatchInlineSnapshot(`"LogoTickerFramerComponent"`)
    expect(componentCamelCase('Logo-Ticker')).toMatchInlineSnapshot(`"LogoTickerFramerComponent"`)
    expect(componentCamelCase('logo')).toMatchInlineSnapshot(`"LogoFramerComponent"`)
    expect(componentCamelCase('nav')).toMatchInlineSnapshot(`"NavFramerComponent"`)
    expect(componentCamelCase('framer_nav')).toMatchInlineSnapshot(`"FramerNavFramerComponent"`)
})

test(
    'extractTokenInfo',
    async () => {
        const str = `
        some other code
        else: --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, #ffffff);
        else: --framer-text-color: var(--token-67c1333b-4249-4ff1-a333-3581964020b4, rgb(0, 0, 0));
        var(not a token)
        mltiple lines
        '--border-color': 'var(--token-64603892-5c8b-477a-82d6-e795e75dd5dc, rgb(255, 79, 0)) /* {"name":"Orange"} */',
        --framer-text-color: var(--token-same-line, rgb(9,34,76)); another-one: --framer-text: var(--token-another-one-in-line, #ffffff);
        color: 'var(--token-bb315df6-c2cd-4c31-805d-6d1891fd5658, rgb(16, 25, 66)) /* {"name":"Space"} */',

        `
        const tokens = extractTokenInfo(str)
        expect(tokens).toMatchInlineSnapshot(`
          [
            {
              "defaultValue": "#ffffff",
              "metadata": undefined,
              "tokenName": "--token-67c1333b-4249-4ff1-a333-3581964020b4",
            },
            {
              "defaultValue": "rgb(0, 0, 0)",
              "metadata": undefined,
              "tokenName": "--token-67c1333b-4249-4ff1-a333-3581964020b4",
            },
            {
              "defaultValue": "rgb(255, 79, 0)",
              "metadata": {
                "name": "Orange",
              },
              "tokenName": "--token-64603892-5c8b-477a-82d6-e795e75dd5dc",
            },
            {
              "defaultValue": "rgb(9,34,76)",
              "metadata": undefined,
              "tokenName": "--token-same-line",
            },
            {
              "defaultValue": "#ffffff",
              "metadata": undefined,
              "tokenName": "--token-another-one-in-line",
            },
            {
              "defaultValue": "rgb(16, 25, 66)",
              "metadata": {
                "name": "Space",
              },
              "tokenName": "--token-bb315df6-c2cd-4c31-805d-6d1891fd5658",
            },
          ]
        `)
    },
    1000 * 10,
)
test(
    'bundle simple component',
    async () => {
        const tempFolder = tmp.dirSync({ unsafeCleanup: true }).name
        console.log('tempFolder', tempFolder)
        const url =
            'https://framer.com/m/Logo-Ticker-1CEq.js@YtVlixDzOkypVBs3Dpav'
        await bundle({
            components: {
                ticker: url,
            },
            cwd: tempFolder,
        })
    },
    1000 * 10,
)
test(
    'issue #1',
    async () => {
        const tempFolder = tmp.dirSync({ unsafeCleanup: true }).name
        console.log('tempFolder', tempFolder)
        const url = 'https://framer.com/m/Item-Qetw.js@vUDyI0yvPLONiBDf8Kzw'
        await bundle({
            components: {
                item: url,
            },
            cwd: tempFolder,
        })
    },
    1000 * 10,
)
test(
    'bundle ticker variant',
    async () => {
        const tempFolder = tmp.dirSync({ unsafeCleanup: true }).name
        console.log('tempFolder', tempFolder)
        const url =
            'https://framer.com/m/Brand-Logo-Ticker-Uc8E.js@WLfLN2D3C6m9DWtZu0ci'
        await bundle({
            components: {
                logos: url,
            },
            cwd: tempFolder,
        })
    },
    1000 * 10,
)
