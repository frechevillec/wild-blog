'use strict'
import moment from 'moment'

let navbar = {
    templateUrl: 'js/components/common/navbar.html',
    controller: ['UsersService', '$state', '$interval', function(UsersService, $state, $interval) {
        'use strict'

        let updateTime = "";

        updateTime=()=> {
                this.time = moment().format("D. MMMM YYYY H:mm:ss");
        }

       $interval(updateTime, 1000);
       console.log($interval(updateTime, 1000));
        
        angular.extend(this, {
            $onInit() {
                UsersService.getCurrent().then((user) => {
                    this.user = user
                }).catch((err) => {

                })
            },

            disconnect() {
                UsersService.disconnect().then(() => {
                    Materialize.toast('Disconnected', 4000, 'toast-warning')
                    this.user = null
                    $state.reload()
                })
            }
        })
    }]
}

export default navbar
