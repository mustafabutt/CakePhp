describe('Protractor Demo App', function () {
    var baseURL = 'http://localhost:1288/apps/App3/#';
    

    beforeEach(function () {
       
    });


    it('should have a title', function () {
        browser.get(baseURL + '/login');
        expect(browser.getTitle()).toEqual('App3');
    });
    it('Login', function () {
        browser.get(baseURL + '/login');
        element(by.model('vm.username')).sendKeys('az');
        element(by.model('vm.password')).sendKeys('123');
        element(by.buttonText('Login')).click();

        browser.waitForAngular();

        expect(browser.getCurrentUrl()).toEqual(baseURL + '/');


    })
    it('user Create', function () {

        browser.get(baseURL + '/user');


        expect(browser.getCurrentUrl()).toEqual(baseURL + '/user');


        var itemList = element.all(by.repeater('item in vm.list'));
        var startCount = itemList.count();
       
        element(by.linkText('Add')).click();


        expect(browser.getCurrentUrl()).toEqual(baseURL + '/user/new');



        element(by.model('vm.newItem.id:number')).sendKeys('id:number1');
        element(by.model('vm.newItem.first_name:string')).sendKeys('first_name:string1');
        element(by.model('vm.newItem.last_name:string')).sendKeys('last_name:string1');
        
        element(by.buttonText('Save')).click();

        browser.waitForAngular();

        expect(browser.getCurrentUrl()).toEqual(baseURL + '/user');



        expect(itemList.count()).toEqual(startCount.then(function (count) {
            return count + 1;
        }));



    });

    it('user Delete', function () {

        browser.get(baseURL + '/user');


        expect(browser.getCurrentUrl()).toEqual(baseURL + '/user');


        browser.waitForAngular();
        var itemList = element.all(by.repeater('item in vm.list'));
        var startCount = itemList.count();


        element.all(by.css('.deleteBtn')).last().click();

        browser.waitForAngular();

        element(by.linkText('Confirm Delete')).click();

        browser.waitForAngular();

        expect(browser.getCurrentUrl()).toEqual(baseURL + '/user');


        
        expect(itemList.count()).toEqual(startCount.then(function (count) {
            return count - 1;
        }));
    });
});
