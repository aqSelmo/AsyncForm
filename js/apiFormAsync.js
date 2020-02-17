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
            },
            success : (res)=>{
                setTimeout(()=>{
                    f("#apiFormAsync_loading").remove();
                },1000);
                f("#"+apiFormAsync_content_id).empty().prop("class", "py-2 h-100 position-relative").prepend(f(l.createElement('form')).prop({
                    method : "POST",
                    enctype : "application/x-www-form-urlencoded",
                    action : "quadrinhos/uploadInfo",
                    id : "formInfoUpload"
                }).prepend(f(l.createElement('div')).prop({
                    class : "row"
                })).append(f(l.createElement('a')).prop({
                    class : "btn btn-outline-success text-success position-absolute",
                    style : "right:0;bottom:0"
                }).text("Concluir").attr('onclick', 'formAsyncSendInformation("#formInfoUpload")')));
                f.each(res, (index, value)=>{
                    f("#"+apiFormAsync_content_id+" .row").append(f(l.createElement('div')).prop({
                        class : "col-2"
                    }).prepend(f(l.createElement('div')).prop({
                        id : "upload" + index,
                        class : "upload-thumb d-block",
                        style : "background-image:url("+apiFormAsync_temp_folder+value.src+");"
                    }).attr({
                        "data-capa" : (index == 0 ? "1" : "0"),
                        "data-src" : value.src,
                        "data-indice" : index
                    })));
                })
                f('')
            }
        })
    }
    this.formAsyncSendInformation = (el)=>{
        let data = [];
        for(let i = c;i < f('.upload-thumb').length;i++){
            data.push({"src" : f('.upload-thumb')[i].attributes["data-src"].value,"capa" : f('.upload-thumb')[i].attributes["data-capa"].value,"indice" : f('.upload-thumb')[i].attributes["data-indice"].value});
        }
        
        f(el).ajaxSubmit({
            dataType : "json",
            data : {
                info : data
            },
            success : ()=>{
                a.triggerFancyFalcs();
            }
        })
        
    }
})($,window,document,0,1)