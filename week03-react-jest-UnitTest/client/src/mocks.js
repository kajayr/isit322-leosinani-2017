/**
 * Created by bcuser on 4/13/17.
 */
var fetch = function (parentThis) {
parentThis.setState ({foo: 'bar'});
        return {
            then: function () {
                return {
                    then: function () {
                        return {
                            catch: function () {

                            }
                        }

                    }
                }

            }
        }
};


module.exports.fetch = fetch;
//export default mocks;
