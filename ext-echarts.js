Ext.define('Ext.echarts.Chart', {
    alias: 'widget.echarts',
    extend: 'Ext.Container',
    title: 'ECharts',

    option: null,

    initComponent : function(){
        var me = this;

        me.on("boxready", function () {
            me.echarts = echarts.init(me.getEl().dom);
            if (me.option) {
               me.echarts.setOption(me.option);
            }
        });

        me.on("resize", function (me, width, height) {
           me.echarts.resize();
        });
        me.layout = 'fit';
        me.callParent(arguments);
    },

    setOption: function(option){
        var me = this;
        me.echarts.setOption(option);
        me.echarts.resize();
    }

});