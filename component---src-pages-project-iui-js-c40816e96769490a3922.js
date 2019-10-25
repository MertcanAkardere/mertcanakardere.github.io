(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{222:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i.n(a),r=i(214),l=i(213);t.default=function(){return n.a.createElement(r.a,null,n.a.createElement(l.a,{title:"Level Design with Intelligent User Interface in Unity"}),n.a.createElement("post",null,n.a.createElement("h1",null,"Level Design with Intelligent User Interface in Unity"),n.a.createElement("h5",null,"June 5th 2019"),n.a.createElement("p",null),n.a.createElement("h4",null,"Promo Video with Instructions:"),n.a.createElement("iframe",{width:"640",height:"360",src:"https://www.youtube.com/embed/ossObkjP-cs",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),n.a.createElement("p",null),n.a.createElement("h3",null,"Aim of the Project"),n.a.createElement("p",null,"This project aim to provide new tools to level design, to bring designer's vision into reality by allowing to design from the player's perspective. These tools are designed to be intuitive and enabling instead of obstructing the creative process like Unity complex UI. There are also more complex commands implemented to increase the tools' efficiency and make experimenting during the design easier. "),n.a.createElement("p",null,"This project introduces a new multimodal approach to design level in Unity with speech commands and hand gestures. Speech commands to create and edit objects can be given with a natural language, and objects or locations can be picked by pointing with finger. Gamepad can be used to navigate the camera, select and move the objects."),n.a.createElement("img",{src:"https://res.cloudinary.com/chiv/image/upload/v1570201584/projects/iui/Slide3_jaltcb.jpg",alt:"slide3"}),n.a.createElement("hr",null),n.a.createElement("h3",null,"How to use it"),n.a.createElement("p",null,"Voice commands have several uses from creating objects to editing their properties. Objects can be created in the default location, or in relative to other objects, or where the user points with the index finger."),n.a.createElement("img",{src:"https://res.cloudinary.com/chiv/image/upload/v1570201584/projects/iui/Slide5_bkxcfo.jpg",alt:"slide5"}),n.a.createElement("p",null,"Users can select an object with a gamepad, or verbally pick it (if several ones are on the screen, the one that is closest to the middle is selected), or by pointing at it. Then edit it's several attributes like it's material, size or color."),n.a.createElement("img",{src:"https://res.cloudinary.com/chiv/image/upload/v1570201584/projects/iui/Slide7_b5pdit.jpg",alt:"slide7"}),n.a.createElement("img",{src:"https://res.cloudinary.com/chiv/image/upload/v1570201586/projects/iui/Slide8_b951mi.jpg",alt:"slide8"}),n.a.createElement("p",null,"For navigation around the level and controlling the camera, a gamepad is used to keep the design process from the player's point of view. But the perspective can be change to bird's-eye view and side view to make precise placements."),n.a.createElement("img",{src:"https://res.cloudinary.com/chiv/image/upload/v1570201582/projects/iui/Slide10_gnwwvp.jpg",alt:"slide10"}),n.a.createElement("img",{src:"https://res.cloudinary.com/chiv/image/upload/v1570201585/projects/iui/Slide9_akch1z.jpg",alt:"slide9"}),n.a.createElement("hr",null),n.a.createElement("h3",null,"Technical Background"),n.a.createElement("p",null,"For voice commands, Microsoft's Speech Services are used. Audio is turned into small WAV files and uploaded to Speech Services. This returns a sentence string with a certain accuracy, that is uploaded again for Microsoft's LUIS for natural language processing. "),n.a.createElement("img",{src:"https://res.cloudinary.com/chiv/image/upload/v1570201584/projects/iui/Slide4_z2xsih.jpg",alt:"slide4"}),n.a.createElement("p",null,"Trained LUIS model finds the intent and determines the entities involved. This service returns a json file with intents and entities, and these determine the use case and the target objects."),n.a.createElement("img",{src:"https://res.cloudinary.com/chiv/image/upload/v1570201584/projects/iui/Slide3_jaltcb.jpg",alt:"slide3"}),n.a.createElement("p",null,"Object entities are returned as a string. Therefore their corresponding prefabs (Unity's game objects) are determined by looking up a string to prefab dictionary."),n.a.createElement("img",{src:"https://res.cloudinary.com/chiv/image/upload/v1570201584/projects/iui/Slide6_go6sgj.jpg",alt:"slide6"}),n.a.createElement("p",null,"This dictionary is available in the Unity's native UI, and easily expandable or customized by the designer. Adding a prefab to speech command is done by adding the name of the object then picking the relevant prefab. If that name is in English language, Cognitive Services will guess it correctly and LUIS is trained to work with most objects and furniture so that may work even without training the data again."),n.a.createElement("p",null,"Materials use a similar dictionary to be extendible and customizable."),n.a.createElement("hr",null),n.a.createElement("h3",null,"Conclusion:"),n.a.createElement("p",null,"This intelligent user interface was promising as it did provide most of the necessary tools of level design, was intutive, and fun to use. It required some more functionality to be feature-complete. But it did perform well compared to the classic method by taking shorter time and being slightly less precise. Details are in the report file."),n.a.createElement("h5",null,"Report: ",n.a.createElement("a",{href:"https://res.cloudinary.com/chiv/image/upload/v1570523757/pdfs/Level_Design_IUI_Report_tbesnk.pdf",target:"_blank"},"Report (PDF)"),".")),n.a.createElement("p",null))}}}]);
//# sourceMappingURL=component---src-pages-project-iui-js-c40816e96769490a3922.js.map