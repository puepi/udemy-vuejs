import { createStore } from "vuex";

import CoachesModule from './modules/coaches/index.js'
import requestsModule from './modules/requests/index'

const store=createStore({
    modules:{
        coaches:CoachesModule,
        requests:requestsModule
    },
    state(){
        return{
            userId:'c3'
        }
    },
    getters:{
        userId(state){
            return state.userId
        },
    }
})

export default store