import LinkList from "../src/link-list";

suite('link list', function () {
    suite('#insert()', function () {

        test('test insert', function () {
            var linkList=new LinkList()
            linkList.insert({
                id:1,
                name:"joe",
            })

            linkList.insert({
                id:2,
                name:"joe2",
            })

            linkList.display();
        });
    });

});