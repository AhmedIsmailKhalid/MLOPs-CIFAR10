(function(){"use strict";var e={4237:function(e,o,n){var t=n(9242),l=n(3396),a=n(7718),r=n(6281),i=n(9159),d=n(4233),s=n(2127),u=n(3140),c=n(1507),p=n(5030);function m(e,o,n,t,m,f){const g=(0,l.up)("v-list-item-content"),_=(0,l.up)("v-list-item-group"),h=(0,l.up)("router-view");return(0,l.wg)(),(0,l.j4)(a.q,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c.V,{app:""},{default:(0,l.w5)((()=>[(0,l.Wm)(i.i,{dense:""},{default:(0,l.w5)((()=>[(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(d.l,{to:"/"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s.V,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Homepage")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(d.l,{to:"/training"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s.V,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Training")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(d.l,{to:"/deployment"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s.V,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Deployment")])),_:1})])),_:1})])),_:1}),(0,l.Wm)(d.l,{to:"/inference"},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s.V,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Inference")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,l.Wm)(r.L,{app:""},{default:(0,l.w5)((()=>[(0,l.Wm)(p.q,null,{default:(0,l.w5)((()=>[(0,l.Uk)("MLOps Platform")])),_:1})])),_:1}),(0,l.Wm)(u.O,null,{default:(0,l.w5)((()=>[(0,l.Wm)(h)])),_:1})])),_:1})}var f={name:"App"},g=n(89);const _=(0,g.Z)(f,[["render",m]]);var h=_,v=(n(9773),n(8727)),y=(0,v.Rd)(),w=n(678),b=n(7139);const M=e=>((0,l.dD)("data-v-b024ade2"),e=e(),(0,l.Cn)(),e),k=M((()=>(0,l._)("h1",null,"Welcome to the MLOps Platform",-1))),C=M((()=>(0,l._)("p",null," Get started by choosing an option from the sidebar. ",-1))),D=M((()=>(0,l._)("label",null,"Background Color: ",-1))),T=M((()=>(0,l._)("label",null,"Primary Text Color: ",-1))),U=M((()=>(0,l._)("label",null,"Secondary Text Color: ",-1)));function P(e,o,n,a,r,i){const d=(0,l.up)("UserGuide");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("div",{style:(0,b.j5)({backgroundColor:r.backgroundColor})},null,4),(0,l._)("div",null,[k,C,(0,l.Wm)(d),(0,l._)("div",null,[D,(0,l.wy)((0,l._)("input",{type:"color","onUpdate:modelValue":o[0]||(o[0]=e=>r.backgroundColor=e)},null,512),[[t.nr,r.backgroundColor]])]),(0,l._)("div",null,[T,(0,l.wy)((0,l._)("input",{type:"color","onUpdate:modelValue":o[1]||(o[1]=e=>r.primaryTextColor=e)},null,512),[[t.nr,r.primaryTextColor]])]),(0,l._)("div",null,[U,(0,l.wy)((0,l._)("input",{type:"color","onUpdate:modelValue":o[2]||(o[2]=e=>r.secondaryTextColor=e)},null,512),[[t.nr,r.secondaryTextColor]])])])],64)}const O={class:"guide"},S=(0,l.uE)("<h2 data-v-1aa0c6e6>User Guide</h2><ol data-v-1aa0c6e6><li data-v-1aa0c6e6><strong data-v-1aa0c6e6>Upload Dataset:</strong> Go to &#39;Model Training&#39; and upload your dataset in a zip format.</li><li data-v-1aa0c6e6><strong data-v-1aa0c6e6>Select Model:</strong> Choose a predefined model architecture or define your custom model in JSON format.</li><li data-v-1aa0c6e6><strong data-v-1aa0c6e6>Training Configuration:</strong> Set the learning rate, number of epochs, and batch size for training.</li><li data-v-1aa0c6e6><strong data-v-1aa0c6e6>Start Training:</strong> Click on the &#39;Start Training&#39; button to begin the training process. Monitor progress with the progress bar.</li><li data-v-1aa0c6e6><strong data-v-1aa0c6e6>Metrics:</strong> After training, you can view metrics on the &#39;Model Training&#39; page, where TensorBoard will display various metrics.</li></ol>",2),L=[S];function I(e,o,n,t,a,r){return(0,l.wg)(),(0,l.iD)("div",O,L)}var A={name:"UserGuide"};const E=(0,g.Z)(A,[["render",I],["__scopeId","data-v-1aa0c6e6"]]);var z=E,W={name:"HomePage",components:{UserGuide:z},data(){return{backgroundColor:"#222830",primaryTextColor:"#BC8824",secondaryTextColor:"#ffffff"}},watch:{backgroundColor(e){document.documentElement.style.setProperty("--global-bg-color",e)},primaryTextColor(e){document.documentElement.style.setProperty("--global-primary-text-color",e)},secondaryTextColor(e){document.documentElement.style.setProperty("--global-secondary-text-color",e)}}};const x=(0,g.Z)(W,[["render",P],["__scopeId","data-v-b024ade2"]]);var N=x;const V=e=>((0,l.dD)("data-v-05204429"),e=e(),(0,l.Cn)(),e),R=V((()=>(0,l._)("h1",null,"Model Training",-1)));function j(e,o,n,t,a,r){const i=(0,l.up)("ModelTraining");return(0,l.wg)(),(0,l.iD)("div",null,[R,(0,l.Wm)(i)])}const F=e=>((0,l.dD)("data-v-02d79770"),e=e(),(0,l.Cn)(),e),q={class:"section"},B=F((()=>(0,l._)("h2",null,"Upload Dataset",-1))),G={key:0},Y={class:"section"},H=F((()=>(0,l._)("h2",null,"Model Configuration",-1))),Z=F((()=>(0,l._)("label",null,"Model Architecutre",-1))),$=F((()=>(0,l._)("option",{disabled:"",value:""},"Please select a model",-1))),J=["value"],K={key:0,for:"transfer-learning-option",class:"model-name"},Q={key:2,for:"transferLearningOption",class:"model-name"},X=F((()=>(0,l._)("option",{disabled:"",value:""},"Perform Transfer Learning",-1))),ee=F((()=>(0,l._)("option",null,"No",-1))),oe=F((()=>(0,l._)("option",null,"Yes",-1))),ne=[X,ee,oe],te={class:"section"},le={key:1},ae={class:"section"},re=F((()=>(0,l._)("h2",null,"Training Configuration",-1))),ie=F((()=>(0,l._)("label",null,"Framework",-1))),de=F((()=>(0,l._)("option",{disabled:"",value:""},"Please select a framework",-1))),se=F((()=>(0,l._)("label",null,"Learning Rate",-1))),ue=F((()=>(0,l._)("label",null,"Epochs",-1))),ce={class:"trainconfig2"},pe=F((()=>(0,l._)("label",null,"Optimizer",-1))),me=F((()=>(0,l._)("option",{disabled:"",value:""},"Please select a optimizer",-1))),fe=F((()=>(0,l._)("option",null,"Adam",-1))),ge=F((()=>(0,l._)("option",null,"RMSprop",-1))),_e=F((()=>(0,l._)("option",null,"SGD",-1))),he=F((()=>(0,l._)("option",null,"Adagrad",-1))),ve=[me,fe,ge,_e,he],ye=F((()=>(0,l._)("label",{class:"trainconfig2-labels"},"Batch Size",-1))),we={class:"section"},be=F((()=>(0,l._)("div",{class:"section"},[(0,l._)("h2",null,"Training Metrics"),(0,l._)("div",{id:"tensorboard-placeholder"},"TensorBoard will be embedded here.")],-1)));function Me(e,o,n,a,r,i){const d=(0,l.up)("vue-progress-bar");return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",q,[B,(0,l._)("input",{type:"file",accept:".zip",ref:"fileInput",onChange:o[0]||(o[0]=(...e)=>i.handleFileUpload&&i.handleFileUpload(...e))},null,544),(0,l._)("button",{class:"upload-data",onClick:o[1]||(o[1]=(...e)=>i.uploadDataset&&i.uploadDataset(...e))},"Upload"),r.uploadMessage?((0,l.wg)(),(0,l.iD)("p",G,(0,b.zw)(r.uploadMessage),1)):(0,l.kq)("",!0)]),(0,l._)("div",Y,[H,Z,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":o[2]||(o[2]=e=>r.selectedModel=e)},[$,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.modelList,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:e},(0,b.zw)(e),9,J)))),128))],512),[[t.bM,r.selectedModel]]),"Add Custom Model"===r.selectedModel?((0,l.wg)(),(0,l.iD)("label",K,"Use ResNET50 As Base Model")):(0,l.kq)("",!0),"Add Custom Model"===r.selectedModel?(0,l.wy)(((0,l.wg)(),(0,l.iD)("input",{key:1,class:"model-name-input",type:"text","onUpdate:modelValue":o[3]||(o[3]=e=>r.customModelName=e),placeholder:"e.g. Custom 5 CNN"},null,512)),[[t.nr,r.customModelName]]):(0,l.kq)("",!0),"Add Custom Model"===r.selectedModel?((0,l.wg)(),(0,l.iD)("label",Q,"Use ResNET50 As Base Model")):(0,l.kq)("",!0),"Add Custom Model"===r.selectedModel?(0,l.wy)(((0,l.wg)(),(0,l.iD)("select",{key:3,class:"transfer-learning","onUpdate:modelValue":o[4]||(o[4]=o=>e.transferLearningOption=o)},ne,512)),[[t.bM,e.transferLearningOption]]):(0,l.kq)("",!0)]),(0,l._)("div",te,["Add Custom Model"===r.selectedModel?((0,l.wg)(),(0,l.iD)("button",{key:0,class:"save-model-button",onClick:o[5]||(o[5]=(...e)=>i.saveModel&&i.saveModel(...e))},"Save Model")):(0,l.kq)("",!0),r.modelSavedMessage?((0,l.wg)(),(0,l.iD)("p",le,(0,b.zw)(r.modelSavedMessage),1)):(0,l.kq)("",!0),"Add Custom Model"===r.selectedModel?(0,l.wy)(((0,l.wg)(),(0,l.iD)("textarea",{key:2,class:"custom-model","onUpdate:modelValue":o[6]||(o[6]=e=>r.customModelJSON=e),placeholder:"        Enter JSON of custom model each layer in a new line.\r\n        TensorFlow Example\r\n        Conv2D(filters=32, kernel_size=(3,3), strides=(2,2), padding='valid)\r\n        MaxPooling2D(pool_size=(2, 2), strides=None, padding='valid')\r\n        Flatten()\r\n        Dense(units=2)\r\n        \r\n        PyTorch Example\r\n        nn.Conv2d(in_channels=3, out_channels=32, kernel_size=(3,3), stride=1, padding=1)\r\n        nn.MaxPool2d(kernel_size=(2, 2), stride=None)\r\n        nn.Flatten()\r\n        nn.Linear(in_features=512, out_features=2)\r\n        \r\n        Note: You don't need to explicity pass the attribute for each layer, just make sure that the parameter values correspond to the proper order depending\r\n        on your framework of choice"},null,512)),[[t.nr,r.customModelJSON]]):(0,l.kq)("",!0)]),(0,l._)("div",ae,[re,ie,(0,l.wy)((0,l._)("select",{class:"selectFramework","onUpdate:modelValue":o[7]||(o[7]=e=>r.framework=e)},[de,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.frameworks,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e},(0,b.zw)(e),1)))),128))],512),[[t.bM,r.framework]]),se,(0,l.wy)((0,l._)("input",{class:"train-configs",type:"se","onUpdate:modelValue":o[8]||(o[8]=e=>r.learningRate=e),placeholder:"Learning Rate"},null,512),[[t.nr,r.learningRate]]),ue,(0,l.wy)((0,l._)("input",{class:"train-configs",type:"se","onUpdate:modelValue":o[9]||(o[9]=e=>r.epochs=e),placeholder:"Epochs"},null,512),[[t.nr,r.epochs]])]),(0,l._)("div",ce,[pe,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":o[10]||(o[10]=e=>r.optimizer=e)},ve,512),[[t.bM,r.optimizer]]),ye,(0,l.wy)((0,l._)("input",{class:"train-configs",type:"se","onUpdate:modelValue":o[11]||(o[11]=e=>r.batchSize=e),placeholder:"Batch Size"},null,512),[[t.nr,r.batchSize]])]),(0,l._)("div",null,[(0,l._)("button",{class:"train-button",onClick:o[12]||(o[12]=(...e)=>i.startTraining&&i.startTraining(...e))},"Train Model")]),(0,l._)("div",we,[(0,l.Wm)(d)]),be])}var ke=n(8541),Ce={name:"ModelTraining",components:{VueProgressBar:ke.VueProgressBar},computed:{modelList(){return this.$store.state.modelList}},data(){return{selectedModel:"",customModelJSON:"",learningRate:.001,epochs:10,batchSize:32,optimizer:"Adam",framework:"",frameworks:["PyTorch","TensorFlow"],modelName:"",transferLearning:"",modelSavedMessage:"",customModelName:"",uploadMessage:"",customModel:""}},methods:{handleFileUpload(){},async startTraining(){try{const e=await this.$axios.post("YOUR_API_GATEWAY_ENDPOINT",{framework:this.framework,optimizer:this.optimizer,learningRate:this.learningRate,batchSize:this.batchSize,epochs:this.epochs});console.log("Training started:",e.data)}catch(e){console.error("Error starting training:",e)}},async fetchTrainingProgress(){try{const e=await this.$axios.get("API_GATEWAY_URL_FOR_FETCHING_LOGS");console.log("Training progress:",e.data)}catch(e){console.error("Error fetching training progress:",e)}},uploadDataset(){const e=this.$refs.fileInput;e.files&&0!==e.files.length?"application/zip"===e.files[0].type?this.uploadMessage=`${e.files[0].name} has been uploaded!`:this.uploadMessage="Please upload ZIP files only!":this.uploadMessage="Please upload a dataset!"},saveModel(){const e=this.customModelName,o=this.transferLearningOption,n=this.customModelJSON;""!==e.trim()?""!==o.trim()?""!==n.trim()?this.modelList.includes(e)?this.modelSavedMessage=`Model with name ${e} already exists!`:(this.$store.commit("ADD_MODEL",e),this.modelSavedMessage=`${e} saved successfully!`):this.modelSavedMessage="Please enter a model architecutre!":this.modelSavedMessage="Please select if you want to perform transfer learning or not!":this.modelSavedMessage="Please enter a custom model name!"},clearModelSavedMessage(){this.modelSavedMessage=""}}};const De=(0,g.Z)(Ce,[["render",Me],["__scopeId","data-v-02d79770"]]);var Te=De,Ue={name:"TrainingView",components:{ModelTraining:Te}};const Pe=(0,g.Z)(Ue,[["render",j],["__scopeId","data-v-05204429"]]);var Oe=Pe;const Se=e=>((0,l.dD)("data-v-f9ea1f44"),e=e(),(0,l.Cn)(),e),Le=Se((()=>(0,l._)("h1",null,"Deploy a Model",-1)));function Ie(e,o,n,t,a,r){const i=(0,l.up)("DeployModel");return(0,l.wg)(),(0,l.iD)("div",null,[Le,(0,l.Wm)(i)])}const Ae=e=>((0,l.dD)("data-v-36c7962a"),e=e(),(0,l.Cn)(),e),Ee={class:"section"},ze=Ae((()=>(0,l._)("h2",null,"Select or Upload Model",-1))),We=Ae((()=>(0,l._)("label",null,"Select Model",-1))),xe=Ae((()=>(0,l._)("option",{disabled:"",value:""},"Please select a model",-1))),Ne=["value"],Ve={class:"section"},Re=Ae((()=>(0,l._)("h2",null,"Deployment Configuration",-1))),je=Ae((()=>(0,l._)("option",null,"AWS",-1))),Fe=Ae((()=>(0,l._)("option",null,"Microsoft Azure",-1))),qe=Ae((()=>(0,l._)("option",null,"GCP",-1))),Be=Ae((()=>(0,l._)("option",null,"IBM",-1))),Ge=[je,Fe,qe,Be],Ye={class:"deploy-button"},He={class:"deployment-log"},Ze=Ae((()=>(0,l._)("h2",null,"Deployment Log",-1))),$e=["value"],Je={key:0,class:"section"},Ke=Ae((()=>(0,l._)("h2",null,"Model API Endpoint",-1))),Qe=Ae((()=>(0,l._)("p",null,"Your model has been successfully deployed and can be accessed at:",-1))),Xe=["href"];function eo(e,o,n,a,r,i){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",Ee,[ze,We,(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":o[0]||(o[0]=e=>r.selectedModel=e)},[xe,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.filteredModelList,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e,value:e},(0,b.zw)(e),9,Ne)))),128))],512),[[t.bM,r.selectedModel]]),(0,l.Uk)(" OR "),(0,l._)("input",{type:"file",ref:"modelInput",onChange:o[1]||(o[1]=(...e)=>i.handleModelUpload&&i.handleModelUpload(...e))},null,544)]),(0,l._)("div",Ve,[Re,(0,l._)("label",null,[(0,l.Uk)(" Choose Cloud Platform "),(0,l.wy)((0,l._)("select",{"onUpdate:modelValue":o[2]||(o[2]=e=>r.deploymentPlatform=e)},Ge,512),[[t.bM,r.deploymentPlatform]])])]),(0,l._)("div",Ye,[(0,l._)("button",{onClick:o[3]||(o[3]=(...e)=>i.deployModel&&i.deployModel(...e))},"Deploy Model")]),(0,l._)("div",He,[Ze,(0,l._)("textarea",{readonly:"",value:r.deploymentLog},null,8,$e)]),r.modelEndpoint?((0,l.wg)(),(0,l.iD)("div",Je,[Ke,Qe,(0,l._)("a",{href:r.modelEndpoint,target:"_blank"},(0,b.zw)(r.modelEndpoint),9,Xe)])):(0,l.kq)("",!0)])}var oo=n(65),no={name:"ModelDeployment",computed:{...(0,oo.rn)(["modelList"]),filteredModelList(){return this.modelList?this.modelList.filter((e=>"Add Custom Model"!==e)):[]}},data(){return{selectedModel:"",deploymentPlatform:"AWS",deploymentLog:"",modelEndpoint:""}},methods:{handleModelUpload(){},deployModel(){}}};const to=(0,g.Z)(no,[["render",eo],["__scopeId","data-v-36c7962a"]]);var lo=to,ao={name:"DeployView",components:{DeployModel:lo}};const ro=(0,g.Z)(ao,[["render",Ie],["__scopeId","data-v-f9ea1f44"]]);var io=ro;const so=e=>((0,l.dD)("data-v-3009e617"),e=e(),(0,l.Cn)(),e),uo=so((()=>(0,l._)("h1",null,"Model Inference",-1)));function co(e,o,n,t,a,r){const i=(0,l.up)("ModelInference");return(0,l.wg)(),(0,l.iD)("div",null,[uo,(0,l.Wm)(i)])}const po=e=>((0,l.dD)("data-v-775c4fb6"),e=e(),(0,l.Cn)(),e),mo={class:"section"},fo=po((()=>(0,l._)("h2",null,"Inference with Your Model",-1))),go={class:"subsection"},_o=po((()=>(0,l._)("label",{for:"model-select"},"Select a Model:",-1))),ho=po((()=>(0,l._)("option",{disabled:"",value:""},"Please select a model",-1))),vo={class:"subsection"},yo=po((()=>(0,l._)("label",{for:"image-upload"},"Upload an Image:",-1))),wo={class:"subsection"},bo=po((()=>(0,l._)("label",{for:"image-link"},"Provide an Image URL:",-1))),Mo={key:0,class:"result"},ko=po((()=>(0,l._)("h3",null,"Result:",-1)));function Co(e,o,n,a,r,i){return(0,l.wg)(),(0,l.iD)("div",mo,[fo,(0,l._)("div",go,[_o,(0,l.wy)((0,l._)("select",{id:"model-select","onUpdate:modelValue":o[0]||(o[0]=e=>r.selectedModel=e)},[ho,((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.filteredModelList,(e=>((0,l.wg)(),(0,l.iD)("option",{key:e},(0,b.zw)(e),1)))),128))],512),[[t.bM,r.selectedModel]])]),(0,l._)("div",vo,[yo,(0,l._)("input",{id:"image-upload",type:"file",onChange:o[1]||(o[1]=(...e)=>i.onImageUpload&&i.onImageUpload(...e))},null,32)]),(0,l._)("div",wo,[bo,(0,l.wy)((0,l._)("input",{id:"image-link",type:"url","onUpdate:modelValue":o[2]||(o[2]=e=>r.imageUrl=e),placeholder:"Enter image URL here"},null,512),[[t.nr,r.imageUrl]])]),(0,l._)("button",{onClick:o[3]||(o[3]=(...e)=>i.performInference&&i.performInference(...e))},"Run Inference"),r.result?((0,l.wg)(),(0,l.iD)("div",Mo,[ko,(0,l._)("p",null,(0,b.zw)(r.result),1)])):(0,l.kq)("",!0)])}var Do={computed:{...(0,oo.rn)(["modelList"]),filteredModelList(){return this.modelList.filter((e=>"Add Custom Model"!==e))}},data(){return{selectedModel:"",imageUrl:"",result:null}},methods:{onImageUpload(){},performInference(){this.result="Predicted Class: Dog with 95% confidence"}}};const To=(0,g.Z)(Do,[["render",Co],["__scopeId","data-v-775c4fb6"]]);var Uo=To,Po={name:"InferenceView",components:{ModelInference:Uo}};const Oo=(0,g.Z)(Po,[["render",co],["__scopeId","data-v-3009e617"]]);var So=Oo;const Lo=[{path:"/",name:"Home",component:N},{path:"/training",name:"Training",component:Oe},{path:"/deployment",name:"Deployment",component:io},{path:"/inference",name:"Inference",component:So}],Io=(0,w.p7)({history:createWebHashHistory(),routes:Lo});var Ao=Io;async function Eo(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}n(7658);var zo=(0,oo.MT)({state:{modelList:["Add Custom Model","ResNet50"]},mutations:{ADD_MODEL(e,o){e.modelList.includes(o)||e.modelList.push(o)}}});Eo(),(0,t.ri)(h).use(Ao).use(y).use(zo).mount("#app")}},o={};function n(t){var l=o[t];if(void 0!==l)return l.exports;var a=o[t]={exports:{}};return e[t].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(o,t,l,a){if(!t){var r=1/0;for(u=0;u<e.length;u++){t=e[u][0],l=e[u][1],a=e[u][2];for(var i=!0,d=0;d<t.length;d++)(!1&a||r>=a)&&Object.keys(n.O).every((function(e){return n.O[e](t[d])}))?t.splice(d--,1):(i=!1,a<r&&(r=a));if(i){e.splice(u--,1);var s=l();void 0!==s&&(o=s)}}return o}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[t,l,a]}}(),function(){n.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(o,{a:o}),o}}(),function(){var e,o=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(t,l){if(1&l&&(t=this(t)),8&l)return t;if("object"===typeof t&&t){if(4&l&&t.__esModule)return t;if(16&l&&"function"===typeof t.then)return t}var a=Object.create(null);n.r(a);var r={};e=e||[null,o({}),o([]),o(o)];for(var i=2&l&&t;"object"==typeof i&&!~e.indexOf(i);i=o(i))Object.getOwnPropertyNames(i).forEach((function(e){r[e]=function(){return t[e]}}));return r["default"]=function(){return t},n.d(a,r),a}}(),function(){n.d=function(e,o){for(var t in o)n.o(o,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(o,t){return n.f[t](e,o),o}),[]))}}(),function(){n.u=function(e){return"js/webfontloader.1f458d6a.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={},o="mlops-cifar-10:";n.l=function(t,l,a,r){if(e[t])e[t].push(l);else{var i,d;if(void 0!==a)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var c=s[u];if(c.getAttribute("src")==t||c.getAttribute("data-webpack")==o+a){i=c;break}}i||(d=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",o+a),i.src=t),e[t]=[l];var p=function(o,n){i.onerror=i.onload=null,clearTimeout(m);var l=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),l&&l.forEach((function(e){return e(n)})),o)return o(n)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=p.bind(null,i.onerror),i.onload=p.bind(null,i.onload),d&&document.head.appendChild(i)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/MLOPs-CIFAR10/"}(),function(){var e={143:0};n.f.j=function(o,t){var l=n.o(e,o)?e[o]:void 0;if(0!==l)if(l)t.push(l[2]);else{var a=new Promise((function(n,t){l=e[o]=[n,t]}));t.push(l[2]=a);var r=n.p+n.u(o),i=new Error,d=function(t){if(n.o(e,o)&&(l=e[o],0!==l&&(e[o]=void 0),l)){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;i.message="Loading chunk "+o+" failed.\n("+a+": "+r+")",i.name="ChunkLoadError",i.type=a,i.request=r,l[1](i)}};n.l(r,d,"chunk-"+o,o)}},n.O.j=function(o){return 0===e[o]};var o=function(o,t){var l,a,r=t[0],i=t[1],d=t[2],s=0;if(r.some((function(o){return 0!==e[o]}))){for(l in i)n.o(i,l)&&(n.m[l]=i[l]);if(d)var u=d(n)}for(o&&o(t);s<r.length;s++)a=r[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},t=self["webpackChunkmlops_cifar_10"]=self["webpackChunkmlops_cifar_10"]||[];t.forEach(o.bind(null,0)),t.push=o.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(4237)}));t=n.O(t)})();
//# sourceMappingURL=app.fb236b72.js.map