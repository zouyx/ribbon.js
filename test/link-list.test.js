import LinkList from "../src/link-list";

import chai from "chai";

var assert = chai.assert

suite('link list', function () {
    suite('#insert()', function () {

        test('test insert', function () {
            var linkList=new LinkList()
            let value1 = {
                id: 1,
                name: "joe",
            };
            let value2 = {
                id: 2,
                name: "joe2",
            };
            let value3 = {
                id: 3,
                name: "joe3",
            };
            linkList.insert(value1)

            linkList.insert(value2)

            linkList.insert(value3)

            assert.equal(value3, linkList.nextNode())
            assert.equal(value2, linkList.nextNode())
            assert.equal(value1, linkList.nextNode())

        });
    });

});