export default class LinkList {
    constructor() {
    }

    //insert node
    insert(item) {
        var newNode = {
            item: item
        }
        if (!this.head) {
            this.last = newNode;
        } else {
            this.head.previous = newNode;
            this.last.next=newNode
            newNode.next = this.head;
        }

        this.head = newNode;
    }

    nextNode() {
        if(!this.currNode){
            this.currNode = this.head;
            return this.currNode.item;
        }
        this.currNode = this.currNode.next;
        return this.currNode.item;
    }
}