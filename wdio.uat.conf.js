//merge parent conf object + add new changes in uat conf(baseurl, connectiontimeour)
import merge from 'deepmerge'
import { config } from './wdio.conf.js'

export const config = merge(config, {

    baseUrl: 'http://rahulshettyacademy.com',
    waitforTimeout: 5000,

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        grep: "sanity"
    },

})


