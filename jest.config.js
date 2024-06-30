module.exports = {
    preset : 'ts-jest',
    transform : {
        ".*\\.(vue)$" : "vue-jest",
        ".*\\.(js)$" : "babel-jest"
    },
    moduleNameMapper : {
        "^@/(.*)$" : "<rootDir>/src/$1"
    },
    testEnvironment : 'jsdom',
    globals : {
        window : {},
    }

};