import { Login, alert, signIn, textInfo } from '../pageobjects/loginPage'
import { checkout, addProductToCart } from '../pageobjects/shop'
import { sumOfProducts as _sumOfProducts, totalFormattedPrice } from '../pageobjects/reviewpage'
import { expect as expectchai } from 'chai'

//Importing the readFileSync method from the 'fs' module in a JavaScript file
import { readFileSync } from 'fs'

//Loading and parsing login credentials from a JSON file in Node.js.
let credentials = JSON.parse(readFileSync('test/testData/LoginTest.json'))
let e2eCredentials = JSON.parse(readFileSync('test/testData/e2eTest.json'))

describe('Ecommerce Application', async () => {

    credentials.forEach(({ username, password }) => {
        it('Login Fail page', async () => {
            //webdriverio Async  (Sync)

            await browser.url("/loginpagePractise/#")
            console.log(await browser.getTitle())
            await expect(browser).toHaveTitleContaining("Rahul Shetty Academy")
            //Css Selector, Xpath
            //await Login(credentials.username, credentials.password);
            await Login(username, password)
            console.log(await alert.getText())
            await browser.waitUntil(async () => await signIn.getAttribute('value') === 'Sign In',
                {
                    timeout: 5000,
                    timeoutMsg: 'Error message is not showing up'
                })
            console.log(await alert.getText())
            await expect(await textInfo).toHaveTextContaining("username is rahulshettyacademy and Password is learning")

        })
    })


    e2eCredentials.forEach(({ products }) => {
        it('End to End Test', async () => {
            // const products = ['iphone X','Blackberry']
            await browser.url("/loginpagePractise/#")
            await Login("rahulshettyacademy", "learning")
            await checkout.waitForExist()  //link Text
            await addProductToCart(products)
            await checkout.click()
            sumOfProducts = await _sumOfProducts()
            totalIntValue = await totalFormattedPrice()
            await expectchai(sumOfProducts).to.equal(totalIntValue)
            await $(".btn-success").click()
            await $("#country").setValue("ind")
            await $(".lds-ellipsis").waitForExist({ reverse: true })
            await $("=India").click()
            await $("input[type='submit']").click()
            await expect($(".alert-success")).toHaveTextContaining("Success")
        })

    })



















})