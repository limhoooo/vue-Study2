import bus from '../utils/bus.js'

export default {
    // 재사용할 컴포넌트 옵션
    created(){
        console.log(this.$route.name);
        bus.$emit('start:spinner');
        //setTimeout(()=>{
            this.$store.dispatch('FETCH_LIST',this.$route.name)
            .then( ()=> {
            bus.$emit('end:spinner');
          })
          .catch();
        //},2000)
    }
}