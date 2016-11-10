describe('Protractor Demo App', function () {
    var baseURL = 'http://localhost:1288/apps/App3/#';
    var maxTimeOut = 5000;
    beforeEach(function () {
        browser.ignoreSynchronization = true;
    });


    it('should have a title', function () {
        browser.driver.get(baseURL + '/login');
        expect(browser.driver.getTitle()).toEqual('App3');
    });
    it('Login', function () {
        browser.get(baseURL + '/login');
        element(by.id('username')).sendKeys('az');
        element(by.id('password')).sendKeys('123');
        element(by.id('login')).click();

        
        browser.driver.wait(function () {
            return browser.driver.getCurrentUrl().then(function (url) {
                return (/home/).test(url);
            });
        }, maxTimeOut);

    })
    it('teacher Create', function () {

        browser.get(baseURL + '/teacher');


        expect(browser.getCurrentUrl()).toEqual(baseURL + '/teacher');


        var itemList = element.all(by.css('.item-list'));
        var startCount = itemList.count();

        element(by.id('add-new')).click();

        

        browser.driver.wait(function() {
            return browser.driver.isElementPresent(by.id("save"));
        },maxTimeOut);

        expect(browser.getCurrentUrl()).toEqual(baseURL + '/teacher/new');

        

        element(by.id('newItem.id:number')).sendKeys('id:number1');
        element(by.id('newItem.username:string')).sendKeys('username:string1');
        element(by.id('newItem.email:string')).sendKeys('email:string1');
        element(by.id('newItem.password:string')).sendKeys('password:string1');
        

        element(by.id('save')).click();

        browser.driver.wait(function() {
            return browser.driver.isElementPresent(by.id("add-new"));
        },maxTimeOut);

        expect(browser.getCurrentUrl()).toEqual(baseURL + '/teacher');


        expect(itemList.count()).toEqual(startCount.then(function (count) {
           return count + 1;
       }));



    });

    it('teacher Delete', function () {

        browser.get(baseURL + '/teacher');


        expect(browser.getCurrentUrl()).toEqual(baseURL + '/teacher');


        var itemList = element.all(by.css('.item-list'));
        var startCount = itemList.count();


        element.all(by.css('.delete-item')).last().click();

        browser.driver.wait(function() {
            return browser.driver.isElementPresent(by.id("delete-item"));
        },maxTimeOut);

        element(by.id('delete-item')).click();

        browser.driver.wait(function() {
            return browser.driver.isElementPresent(by.id("add-new"));
        },maxTimeOut);

        expect(browser.getCurrentUrl()).toEqual(baseURL + '/teacher');



        expect(itemList.count()).toEqual(startCount.then(function (count) {
            return count - 1;
        }));
    });

    
});
