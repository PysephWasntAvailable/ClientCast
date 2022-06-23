"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[484],{6068:function(e){e.exports=JSON.parse('{"functions":[{"name":"DisableDebug","desc":"Disables the debug trails of the ClientCaster.","params":[],"returns":[],"function_type":"method","source":{"line":297,"path":"lib/init.lua"}},{"name":"StartDebug","desc":"Starts the debug trails of the ClientCaster.","params":[],"returns":[],"function_type":"method","source":{"line":314,"path":"lib/init.lua"}},{"name":"Start","desc":"Starts this ClientCaster object, beginning to raycast for the hit detection.","params":[],"returns":[],"function_type":"method","source":{"line":337,"path":"lib/init.lua"}},{"name":"Destroy","desc":"Destroys this ClientCaster object, cleaning up any remnant connections.","params":[],"returns":[],"function_type":"method","source":{"line":355,"path":"lib/init.lua"}},{"name":"Stop","desc":"Stops this ClientCaster object, stopping raycasts for hit detection.","params":[],"returns":[],"function_type":"method","source":{"line":391,"path":"lib/init.lua"}},{"name":"SetOwner","desc":"Sets the given Player as owner for this caster object. When NewOwner is nil, the server will be the owner instead of a Player.","params":[{"name":"NewOwner","desc":"","lua_type":"Player"}],"returns":[],"function_type":"method","source":{"line":408,"path":"lib/init.lua"}},{"name":"GetOwner","desc":"Returns the current Player who is the owner of the caster, or nil in case of the server. The owner calculates intersections, and\\nas such it\'s recommended to have the client calculate it to have less of a burden on the server.","params":[],"returns":[{"desc":"","lua_type":"Player?"}],"function_type":"method","source":{"line":430,"path":"lib/init.lua"}},{"name":"SetMaxPingExhaustion","desc":"Determines how long the ClientCaster:GetPing() method can yield for before resuming, to protect against potential exploiting.\\nDefault exhaustion time is 1.","params":[{"name":"Time","desc":"","lua_type":"number"}],"returns":[],"function_type":"method","source":{"line":438,"path":"lib/init.lua"}},{"name":"GetMaxPingExhaustion","desc":"Returns how long the ClientCaster:GetPing() method can yield before resuming.","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":452,"path":"lib/init.lua"}},{"name":"GetPing","desc":"If the ClientCaster object has a set Owner, it will return the ping of that player by calculating delay between client-server.\\nNOTE This is a yielding function, and it will yield until it gets the players ping.","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","yields":true,"source":{"line":461,"path":"lib/init.lua"}},{"name":"SetObject","desc":"Sets this ClientCaster\'s object which it will raycast from to Object.","params":[{"name":"Object","desc":"","lua_type":"Instance"}],"returns":[],"function_type":"method","source":{"line":472,"path":"lib/init.lua"}},{"name":"GetObject","desc":"Returns the object this ClientCaster is raycasting from.","params":[],"returns":[{"desc":"","lua_type":"Instance"}],"function_type":"method","source":{"line":505,"path":"lib/init.lua"}},{"name":"EditRaycastParams","desc":"Updates the ClientCaster\'s RaycastParams property.","params":[{"name":"RaycastParameters","desc":"","lua_type":"RaycastParams"}],"returns":[],"function_type":"method","source":{"line":512,"path":"lib/init.lua"}},{"name":"SetRecursive","desc":"when set to true, the ClientCasterobject will search for Raycast points (DmgPoints) from the whole Object\'s descendants, rather then the Object\'s direct children.\\nUseful for whole model hitboxes and characters.","params":[{"name":"Recursive","desc":"","lua_type":"boolean"}],"returns":[],"function_type":"method","source":{"line":526,"path":"lib/init.lua"}}],"properties":[{"name":"RaycastParams","desc":"Returns the ClientCaster\'s set RaycastParams.","lua_type":"RaycastParams","readonly":true,"source":{"line":249,"path":"lib/init.lua"}},{"name":"Debug","desc":"Returns whether the ClientCaster object has debug mode enabled, visualizing the ClientCaster\'s rays.","lua_type":"boolean","readonly":true,"source":{"line":254,"path":"lib/init.lua"}},{"name":"Recursive","desc":"Determines whether the Caster object will search for Raycast points (DmgPoints) from the whole object\'s descendants, rather then the object\'s direct children.","lua_type":"boolean","readonly":true,"source":{"line":259,"path":"lib/init.lua"}},{"name":"Object","desc":"Returns the object that the ClientCaster is raycasting from.","lua_type":"Instance","readonly":true,"source":{"line":264,"path":"lib/init.lua"}},{"name":"Owner","desc":"Returns the current Player who is the owner of the caster, or nil in case of the server. The owner calculates intersections, and as such it\'s recommended to have the client calculate it to have less of a burden on the server.","lua_type":"Player?","readonly":true,"source":{"line":269,"path":"lib/init.lua"}},{"name":"Disabled","desc":"Returns whether the ClientCaster is disabled (not raycasting).","lua_type":"boolean","readonly":true,"source":{"line":274,"path":"lib/init.lua"}},{"name":"Collided","desc":"Fires whenever any object intersects any one of the ClientCaster\'s rays.","lua_type":"Signal","tags":["Events"],"source":{"line":279,"path":"lib/init.lua"}},{"name":"HumanoidCollided","desc":"Fires whenever any of the ClientCaster\'s rays intersect with an object, whose ancestor Model has a Humanoid object.","lua_type":"Signal","tags":["Events"],"source":{"line":284,"path":"lib/init.lua"}}],"types":[],"name":"ClientCaster","desc":"An object which handles raycasting and client-communication.","source":{"line":244,"path":"lib/init.lua"}}')}}]);