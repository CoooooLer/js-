<script type="text/javascript">
    function change(name) {
        window.localStorage.setItem('name', name)
    }
    $(function(){
        console.log('version: 0.0.3')
        function saveTabActive() {
            console.log('active')
            let defaultVal = ''
            defaultVal = window.localStorage.getItem('name')
            const tabs = $('.item')
            console.log('defaultVal', defaultVal)
            for(let i=0;i<tabs.length;i++){
                const name = $(tabs[i]).attr('name')
                if(defaultVal == '' || defaultVal == null) {
                    $(tabs[0]).addClass('active')
                    break
                }
                if(defaultVal == name) {
                    $(tabs[i]).addClass('active')
                    $(tabs[i]).siblings().removeClass('active')
                    break
                }
            }
        }
        saveTabActive()
    });
</script>