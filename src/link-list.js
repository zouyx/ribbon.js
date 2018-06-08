
export default class LinkList{
    constructor(){
        this.head = {};
        this.last = {};
    }

    //insert node
    insert(item){
        var newNode={
            item:item
        }
        if(!this.head){
            this.last=newNode;
            return;
        }else{
            this.head.previous= newNode;
            newNode.next = this.head;
        }

        this.head = newNode;
    }

    display(){
        var currNode = this.head;
        while (!(currNode.next == null)){
            console.log(JSON.stringify(currNode.next.item),"\n")
            currNode = currNode.next;
        }
    }
}