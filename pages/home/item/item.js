Component({
    properties: {
        title:{
            type: String,
            value: "title"
        },
        description:{
            type: String,
            value: "description"
        },
        count:{
            type: Int8Array,
            value: 0
        },
        image:{
            type: String,
            value: 'https://tdesign.gtimg.com/miniprogram/images/image1.jpeg'
        }
    },
    data: {
        visible: false
    },
    methods: {
        onClick: function (e){
            this.setData(
                { visible: true }
            );
        },

        onVisibleChange(e) {
            this.setData({
                visible: e.detail.visible,
            });
        },
        onClose() {
            this.setData({
                visible: false,
            });
        },
    }
});
