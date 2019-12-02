import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const store= new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
        typeOf: "",
        labelType: ""
    },
    mutations:{
        selectTypeProd: (state, type) =>{
            // alert('1');
            state.typeOf = type;
        },
        labelType: (state, label)=>{
            state.labelType = label;
        }
    },
    getters:{
        selecterOfType: (state) =>{
            return state.typeOf;
        },
        labelGetter:(state)=>{
            return state.labelType;
        }
    }
})
export default store