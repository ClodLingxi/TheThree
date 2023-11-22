Component({
    properties: {
        label: {
            type: String,
            value: "糖"
        },
        max_num: {
            type: Int8Array,
            value: 2
        }
    },
    data: {
        value: 0
    },
    methods: {
        onClick(e){
            if(e.detail.currentTarget.dataset.custom.val && this.data.value < this.data.max_num){
                this.setData({
                    value: this.data.value + 1
                })
            }else if(this.data.value){
                this.setData({
                    value: this.data.value - 1
                })
            }
        }
    }
});
