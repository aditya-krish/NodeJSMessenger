"use strict";

var DOMAIN_ID = 42;

var qos = {user_data: 'foo'};

function init_opendds(opendds_addon) {
    return opendds_addon.initialize('-DCPSConfigFile', 'rtps.ini');
}

var opendds_addon = require('opendds/lib/node-opendds'),
  factory = init_opendds(opendds_addon),
  library = opendds_addon.load('idl/messenger_idl_test'),
  participant = factory.create_participant(DOMAIN_ID, qos),
  reader,
  last_sample_id = 39,
  dds_inf = 0x7fffffff,
  infinite = {sec: dds_inf, nanosec: dds_inf};

function log(label, object) {
  console.log(label + ': ' + JSON.stringify(object, null, 2));
}

try {
  if (!library) {
    throw 'Failed to load shared library';
  }
    reader = participant.subscribe('topic', 'Messenger::Message', 
        qos, 
        function (dr, sinfo, sample) {
            try {
            log('Received callback', sample);
            log('Sample Info', sinfo);
            if (sample.count == last_sample_id) {
                participant.unsubscribe(reader);
            
            }
            } catch (e) {
                console.log("Error in callback: " + e);
            }
        }
    );
} catch (e) {
  console.log(e);
}

process.on('exit', function () {
  factory.delete_participant(participant); // optional
  opendds_addon.finalize(factory);
});
