var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BSchema = new Schema({
    surname: {type: String, required: true, list:{}},        // this field appears in a listing and the default edit form header
    forename:  {type: String, list:true},                    // this field appears in a listing and the default edit form header
    address: {
        line1: {type: String, form:{label: 'Address'}},      // this label overrides the one generated from the field name
        line2: {type: String, form:{label: null}},           // null label - gives a blank label
        line3: {type: String, form:{label: null}},
        town: {type: String, form:{label: 'Town'}},
        postcode: {type: String, form:{label: 'Postcode', help:'Enter your postcode or zip code'}}  // help displays on the line under the control
    },
    weight: {type : Number, form:{label:"Weight (lbs)"}},    // this label overrides the one generated from the field name
    dateOfBirth: Date,
    accepted: {type: Boolean, form:{helpInline: 'Did we take them?'}},   // helpInline displays to the right of the input control
    interviewScore:{type:Number,form:{hidden:true},list:{}},  // this field does not appear on the form or listings, even though list is defined - not sure about this
    freeText: {type: String, form:{type: 'textarea', rows:5}}
});

var B = mongoose.model('B', BSchema);

// Alternative form schemas can be defined as shown below
BSchema.statics.form = function(layout) {
    var formSchema = '';
    switch (layout) {
        case 'justname' :
            formSchema = {forename:{}, surname:{label:"Family Name"}};  // the object overrides the form object in the schema
            break;
    }
    return formSchema;
};

module.exports = B;
