describe('Controllers', function () {
        var mockedteacherService = {

            data: [
                { id: 1, value: "temp1" },
                { id: 2, value: "temp2" },
                { id: 3, value: "temp3" },
                { id: 4, value: "temp4" }
            ],
            getList : function(){
                return {
                    subscribe : function(next){
                        next(mockedteacherService.data);

                    }
                }
            },
            getOne : function(id){
                return {
                    subscribe : function(next){
                        next(mockedteacherService.data[id-1]);

                    }
                }
            },
            newItem : {},
            add : function(item){
                this.newItem = item;
                return {
                    then : function(next){
                        next(item);
                    }
                }
            },
            editItem : {},
            save : function(item){
                this.editItem = item;
                return {
                    then : function(next){
                        next(item);
                    }
                }
            },
            deleteItem : {},
            delete : function(item){
                this.deleteItem = item;
                return {
                    then : function(next){
                        next(item);
                    }
                }
            }
        }
        var mockedRouter = {
            currentUrl : '',
            parent : {
                navigate : function(url){
                    mockedRouter.currentUrl = url;
                }
            }
        }
        var mockedParams = {
            id : 1,
            get : function(param){
                return mockedParams[param];
            }
        }
        it('teacher List', function () {

            var listComponent = new app.teacherListComponent(mockedteacherService);

            
            expect(listComponent.list).toEqual(mockedteacherService.data);

        });
    
        it('teacher Create', function () {

            var createComponent = new app.teacherCreateComponent(mockedteacherService,mockedRouter);

            
            createComponent.newItem = { id: 2, value: "temp" };
            
            createComponent.addNew();
            
            expect(mockedteacherService.newItem).toEqual(createComponent.newItem);

            
            expect(mockedRouter.currentUrl).toEqual('/teacher');

        });

        it('teacher Details', function () {

            mockedParams.id = 3;
            
            var detailsComponent = new app.teacherDetailsComponent(mockedteacherService,mockedParams);

            
            expect(detailsComponent.item.id).toEqual(mockedParams.id);
        });

        it('teacher Edit', function () {

            mockedParams.id = 1;
            
            var editComponent = new app.teacherEditComponent(mockedteacherService,mockedParams,mockedRouter);

            
            expect(editComponent.editItem.id).toEqual(mockedParams.id);

            editComponent.save();
            
            expect(mockedteacherService.editItem).toEqual(editComponent.editItem);

            
            expect(mockedRouter.currentUrl).toEqual('/teacher');

        });

        it('teacher Delete', function () {

            mockedParams.id = 2;
            
            var deleteComponent = new app.teacherDeleteComponent(mockedteacherService,mockedParams,mockedRouter);

            
            expect(deleteComponent.deleteItem.id).toEqual(mockedParams.id);

            deleteComponent.delete();
            
            expect(mockedteacherService.deleteItem).toEqual(deleteComponent.deleteItem);

            
            expect(mockedRouter.currentUrl).toEqual('/teacher');

        });

});
