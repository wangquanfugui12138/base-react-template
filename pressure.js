const puppeteer = require('puppeteer-core')
const chalk = require('chalk')

const url = 'https://www.taobao.com'
const times = 10
const time = 1500
let result = {}
let temp = []

const test = (async () => {
  for (let i = 0; i < times; i++) {
    let browser = await puppeteer.launch({
      executablePath: 'c:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
      headless: true,
      args: [
        '–disable-gpu',
        '–disable-dev-shm-usage',
        '–disable-setuid-sandbox',
        '–no-first-run',
        '–no-sandbox',
        '–no-zygote',
        '–single-process'
      ]
    })
    let page = await browser.newPage()
    await page.goto(url)
    // await page.waitFor(time)
    // await page.screenshot({ path: `./imgs/pressure/test_${i + 1}.png` })

    let timeData = JSON.parse(await page.evaluate(
      () => JSON.stringify(window.performance.timing)
    ))
    temp.push(dataHandler(timeData))
    await browser.close()
  }

  let domSum = 0
  let holeSum = 0
  for (let k = 0; k < times; k++) {
    domSum += temp[k].domTime
    holeSum += temp[k].holeTime
  }
  var domContentTime = domSum / times
  var loadTime = holeSum / times
  result[url] = {
    "白屏时间": `${domContentTime}ms`,
    "load时间": `${loadTime}ms`
  }

  console.log(`${url} 平均白屏时间: ${domContentTime >= 1000 ? chalk.red(domContentTime) : chalk.green(domContentTime)}ms ,平均load时间：${loadTime >= 1000 ? chalk.red(loadTime) : chalk.green(loadTime)}ms`)
})

const dataHandler = (timeData) => {
  let result = {}
  result.holeTime = timeData.loadEventEnd - timeData.domainLookupStart //整屏时间
  result.domTime = timeData.domContentLoadedEventStart - timeData.domainLookupStart //白屏时间
  return result
}

test()