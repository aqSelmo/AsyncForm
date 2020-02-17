((f,a,l,c,s)=>{
    this.formAsyncSend = (el)=>{
        f(el).ajaxSubmit({
            dataType : "json",
            beforeSend : (data)=>{
                f("#"+apiFormAsync_content_id).append(f(l.createElement('div')).prop({
                    id : "apiFormAsync_loading"
                }).append(f(l.createElement('i')).prop({
                    class : "fa fa-circle-o-notch fa-spin fa-2x fa-fw"
                })));
            }
        })
    }
})($,window,document,0,1)