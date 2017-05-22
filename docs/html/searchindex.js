Search.setIndex({docnames:["contributions","faq","index","installation","introduction","nutsml","nutsml.examples","nutsml.examples.cifar","nutsml.examples.mnist","overview","tutorial/batching","tutorial/configuration","tutorial/custom_nuts","tutorial/example","tutorial/image_processing","tutorial/introduction","tutorial/loading_images","tutorial/logging","tutorial/network","tutorial/plotting","tutorial/reading_samples","tutorial/split_stratify"],envversion:50,filenames:["contributions.rst","faq.rst","index.rst","installation.rst","introduction.rst","nutsml.rst","nutsml.examples.rst","nutsml.examples.cifar.rst","nutsml.examples.mnist.rst","overview.rst","tutorial\\batching.rst","tutorial\\configuration.rst","tutorial\\custom_nuts.rst","tutorial\\example.rst","tutorial\\image_processing.rst","tutorial\\introduction.rst","tutorial\\loading_images.rst","tutorial\\logging.rst","tutorial\\network.rst","tutorial\\plotting.rst","tutorial\\reading_samples.rst","tutorial\\split_stratify.rst"],objects:{"":{batcher:[5,0,0,"-"],booster:[5,0,0,"-"],cnn_train:[8,0,0,"-"],common:[5,0,0,"-"],config:[5,0,0,"-"],datautil:[5,0,0,"-"],fileutil:[5,0,0,"-"],imageutil:[5,0,0,"-"],logger:[5,0,0,"-"],mlp_train:[8,0,0,"-"],mlp_view_misclassified:[7,0,0,"-"],network:[5,0,0,"-"],nutsml:[5,0,0,"-"],plotter:[5,0,0,"-"],read_images:[8,0,0,"-"],reader:[5,0,0,"-"],stratify:[5,0,0,"-"],transformer:[5,0,0,"-"],view_train_images:[8,0,0,"-"],viewer:[5,0,0,"-"],write_images:[8,0,0,"-"],writer:[5,0,0,"-"]},"nutsml.batcher":{BuildBatch:[5,1,1,""],build_image_batch:[5,3,1,""],build_number_batch:[5,3,1,""],build_one_hot_batch:[5,3,1,""],build_vector_batch:[5,3,1,""]},"nutsml.batcher.BuildBatch":{__init__:[5,2,1,""],__rrshift__:[5,2,1,""],by:[5,2,1,""]},"nutsml.booster":{Boost:[5,1,1,""],random:[5,3,1,""]},"nutsml.booster.Boost":{__rrshift__:[5,2,1,""]},"nutsml.common":{CheckNaN:[5,1,1,""],PartitionByCol:[5,1,1,""],SplitRandom:[5,1,1,""]},"nutsml.common.CheckNaN":{__call__:[5,2,1,""]},"nutsml.common.PartitionByCol":{__rrshift__:[5,2,1,""]},"nutsml.common.SplitRandom":{__rrshift__:[5,2,1,""]},"nutsml.config":{ConfigDict:[5,1,1,""],load_config:[5,3,1,""]},"nutsml.config.ConfigDict":{__init__:[5,2,1,""]},"nutsml.datautil":{col_map:[5,3,1,""],group_by:[5,3,1,""],group_samples:[5,3,1,""],isnan:[5,3,1,""],random_downsample:[5,3,1,""],shapestr:[5,3,1,""],upsample:[5,3,1,""]},"nutsml.examples":{cifar:[7,0,0,"-"],mnist:[8,0,0,"-"]},"nutsml.examples.cifar":{cnn_train:[7,0,0,"-"],read_images:[7,0,0,"-"],view_train_images:[7,0,0,"-"],write_images:[7,0,0,"-"]},"nutsml.examples.cifar.cnn_train":{create_network:[7,3,1,""],load_names:[7,3,1,""],load_samples:[7,3,1,""],train:[7,3,1,""]},"nutsml.examples.mnist":{cnn_train:[8,0,0,"-"],mlp_train:[8,0,0,"-"],read_images:[8,0,0,"-"],view_train_images:[8,0,0,"-"],write_images:[8,0,0,"-"]},"nutsml.examples.mnist.cnn_train":{create_network:[8,3,1,""],load_samples:[8,3,1,""],train:[8,3,1,""]},"nutsml.examples.mnist.mlp_train":{create_network:[8,3,1,""],load_samples:[8,3,1,""],train:[8,3,1,""]},"nutsml.examples.mnist.write_images":{load_samples:[8,3,1,""]},"nutsml.fileutil":{clear_folder:[5,3,1,""],create_filename:[5,3,1,""],create_folders:[5,3,1,""],create_temp_filepath:[5,3,1,""],delete_file:[5,3,1,""],delete_folders:[5,3,1,""],delete_temp_data:[5,3,1,""]},"nutsml.imageutil":{add_channel:[5,3,1,""],annotation2coords:[5,3,1,""],annotation2mask:[5,3,1,""],annotation2pltpatch:[5,3,1,""],arr_to_pil:[5,3,1,""],centers_inside:[5,3,1,""],change_brightness:[5,3,1,""],change_color:[5,3,1,""],change_contrast:[5,3,1,""],change_sharpness:[5,3,1,""],crop:[5,3,1,""],crop_center:[5,3,1,""],enhance:[5,3,1,""],extract_patch:[5,3,1,""],fliplr:[5,3,1,""],flipud:[5,3,1,""],floatimg2uint8:[5,3,1,""],gray2rgb:[5,3,1,""],identical:[5,3,1,""],load_image:[5,3,1,""],mask_choice:[5,3,1,""],mask_where:[5,3,1,""],normalize_histo:[5,3,1,""],patch_iter:[5,3,1,""],pil_to_arr:[5,3,1,""],rerange:[5,3,1,""],resize:[5,3,1,""],rgb2gray:[5,3,1,""],rotate:[5,3,1,""],sample_labeled_patch_centers:[5,3,1,""],sample_mask:[5,3,1,""],sample_patch_centers:[5,3,1,""],sample_pn_patches:[5,3,1,""],save_image:[5,3,1,""],shear:[5,3,1,""],translate:[5,3,1,""]},"nutsml.logger":{LogCols:[5,1,1,""]},"nutsml.logger.LogCols":{"delete":[5,2,1,""],__call__:[5,2,1,""],__init__:[5,2,1,""],close:[5,2,1,""]},"nutsml.network":{EvalNut:[5,1,1,""],KerasNetwork:[5,1,1,""],LasagneNetwork:[5,1,1,""],Network:[5,1,1,""],PredictNut:[5,1,1,""],TrainValNut:[5,1,1,""]},"nutsml.network.EvalNut":{__rrshift__:[5,2,1,""]},"nutsml.network.KerasNetwork":{__init__:[5,2,1,""],load_weights:[5,2,1,""],predict:[5,2,1,""],print_layers:[5,2,1,""],save_weights:[5,2,1,""],train:[5,2,1,""],validate:[5,2,1,""]},"nutsml.network.LasagneNetwork":{__init__:[5,2,1,""],load_weights:[5,2,1,""],predict:[5,2,1,""],print_layers:[5,2,1,""],save_weights:[5,2,1,""],train:[5,2,1,""],validate:[5,2,1,""]},"nutsml.network.Network":{__init__:[5,2,1,""],evaluate:[5,2,1,""],load_weights:[5,2,1,""],predict:[5,2,1,""],print_layers:[5,2,1,""],save_best:[5,2,1,""],save_weights:[5,2,1,""],train:[5,2,1,""],validate:[5,2,1,""]},"nutsml.network.PredictNut":{__rrshift__:[5,2,1,""]},"nutsml.network.TrainValNut":{__rrshift__:[5,2,1,""]},"nutsml.plotter":{PlotLines:[5,1,1,""]},"nutsml.plotter.PlotLines":{__call__:[5,2,1,""],__init__:[5,2,1,""],reset:[5,2,1,""]},"nutsml.reader":{DplyToList:[5,1,1,""],ReadImage:[5,1,1,""],ReadLabelDirs:[5,1,1,""],ReadPandas:[5,1,1,""]},"nutsml.reader.DplyToList":{__call__:[5,2,1,""]},"nutsml.reader.ReadImage":{__call__:[5,2,1,""]},"nutsml.reader.ReadPandas":{__init__:[5,2,1,""],dply:[5,2,1,""],isnull:[5,4,1,""]},"nutsml.stratify":{Stratify:[5,1,1,""]},"nutsml.stratify.Stratify":{__rrshift__:[5,2,1,""]},"nutsml.transformer":{AugmentImage:[5,1,1,""],ImageAnnotationToMask:[5,1,1,""],ImageChannelMean:[5,1,1,""],ImageMean:[5,1,1,""],ImagePatchesByAnnotation:[5,1,1,""],ImagePatchesByMask:[5,1,1,""],RandomImagePatches:[5,1,1,""],RegularImagePatches:[5,1,1,""],TransformImage:[5,1,1,""],map_transform:[5,3,1,""]},"nutsml.transformer.AugmentImage":{__init__:[5,2,1,""],__rrshift__:[5,2,1,""],by:[5,2,1,""]},"nutsml.transformer.ImageAnnotationToMask":{__rrshift__:[5,2,1,""]},"nutsml.transformer.ImageChannelMean":{__call__:[5,2,1,""],__init__:[5,2,1,""],train:[5,2,1,""]},"nutsml.transformer.ImageMean":{__call__:[5,2,1,""],__init__:[5,2,1,""],train:[5,2,1,""]},"nutsml.transformer.ImagePatchesByAnnotation":{__rrshift__:[5,2,1,""]},"nutsml.transformer.ImagePatchesByMask":{__rrshift__:[5,2,1,""]},"nutsml.transformer.RandomImagePatches":{__rrshift__:[5,2,1,""]},"nutsml.transformer.RegularImagePatches":{__rrshift__:[5,2,1,""]},"nutsml.transformer.TransformImage":{__call__:[5,2,1,""],__init__:[5,2,1,""],by:[5,2,1,""],register:[5,5,1,""],transformations:[5,6,1,""]},"nutsml.viewer":{PrintColType:[5,1,1,""],ViewImage:[5,1,1,""],ViewImageAnnotation:[5,1,1,""]},"nutsml.viewer.PrintColType":{__call__:[5,2,1,""],__init__:[5,2,1,""]},"nutsml.viewer.ViewImage":{__call__:[5,2,1,""],__init__:[5,2,1,""]},"nutsml.viewer.ViewImageAnnotation":{SHAPEPROP:[5,6,1,""],TEXTPROP:[5,6,1,""],__call__:[5,2,1,""],__init__:[5,2,1,""]},"nutsml.writer":{WriteImage:[5,1,1,""]},"nutsml.writer.WriteImage":{__call__:[5,2,1,""],__init__:[5,2,1,""]},nutsml:{batcher:[5,0,0,"-"],booster:[5,0,0,"-"],common:[5,0,0,"-"],config:[5,0,0,"-"],datautil:[5,0,0,"-"],examples:[6,0,0,"-"],fileutil:[5,0,0,"-"],imageutil:[5,0,0,"-"],logger:[5,0,0,"-"],network:[5,0,0,"-"],plotter:[5,0,0,"-"],reader:[5,0,0,"-"],stratify:[5,0,0,"-"],transformer:[5,0,0,"-"],viewer:[5,0,0,"-"],writer:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"],"4":["py","staticmethod","Python static method"],"5":["py","classmethod","Python class method"],"6":["py","attribute","Python attribute"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function","4":"py:staticmethod","5":"py:classmethod","6":"py:attribute"},terms:{"10x20x3":5,"1x10x20":5,"213x320x3":5,"2x1x2x3":5,"2x3":5,"32x32":13,"37d4df0dacfb70d3b48d":21,"3x4":5,"5x4x3":5,"abstract":5,"boolean":5,"case":5,"class":[0,5,9,13,20],"default":[5,13],"final":[0,13],"float":[1,5,13],"function":[0,2,4,5,13,20],"import":[1,3,5,13,20,21],"int":[5,13,20],"long":20,"new":[5,13],"return":[1,2,5,9,13,20],"short":2,"static":5,"throw":13,"true":[5,13],"while":[5,13],But:20,For:[1,2,3,4,5,12,13],NOT:5,Not:13,One:5,The:[1,2,4,5,13],There:[13,20],These:2,Use:21,Used:5,Useful:5,Will:5,__call__:5,__init__:5,__rrshift__:5,aabbccdde:5,about:[5,20],abov:[13,20],absolut:5,acc:[2,4,5,13],accept:13,access:5,accord:5,accordingli:13,account:13,accur:13,accuraci:[2,4,5,9,13],achiev:5,across:5,action:0,activ:[3,13],adam:13,add:[5,13],add_channel:5,add_n:5,added:[5,13],addit:13,adjust:5,advanc:20,advantag:13,affinetransform:5,after:[5,13],again:13,age:5,aggreg:5,aim:0,airplan:13,all:[2,5,13,20],allow:[5,13],almost:2,alpha:5,alreadi:5,also:[1,5,13,20],altern:5,amount:[4,13],anaconda:3,analog:13,angl:5,ani:[5,13],anno:5,annoarg:5,annocol:5,annot:[5,9],annotation2coord:5,annotation2mask:5,annotation2pltpatch:5,anymor:[5,13],anyth:5,api:5,appear:5,append:5,appli:[5,13],applic:[4,13],arang:5,architectur:13,archiv:21,arg:[5,13],argmax:13,argument:5,around:5,arr:5,arr_to_pil:5,arrai:[5,9,13],arrang:[2,4,5],as_grei:5,assum:[1,5],astyp:5,attribut:5,audio:20,augment1:5,augment2:5,augment:[2,4,5,9],augment_img:5,augmentimag:[4,5,9,13],automat:[13,20],avail:[2,5,13],averag:13,avoid:0,awai:13,axi:5,backgroundcolor:5,bar:5,base:[2,4,5,8,9],basedir:5,basic:[15,20],bat:3,batch:[4,5,9],batch_siz:[4,13],batched_label:1,batched_pr:1,batcher:[0,4,13],batchsiz:[5,13],becom:5,been:5,befor:[5,13,20],below:[4,5,13],benchmark:13,best:5,better:[5,20],between:13,bicub:5,bilinear:5,bin:3,bit:[9,20],black:2,blanklin:5,blob:8,blur:13,bmp:[1,5],bool:5,boost:[5,9],booster:0,bright:[4,5,13],brighter:5,build:[2,5,9,13],build_batch:[1,2,4,5,13],build_image_batch:5,build_number_batch:5,build_one_hot_batch:5,build_vector_batch:5,buildbatch:[0,4,5,9,13],buts:20,call:[2,4,5,13],camelcas:0,can:[2,3,4,5,13,20],categori:13,categorical_accuraci:[4,13],categorical_crossentropi:13,center:5,centers_insid:5,cfg:5,chain:[5,13],chang:[4,5,13],change_bright:5,change_color:5,change_contrast:5,change_sharp:5,channel:[5,9],channelfirst:5,charact:20,character:4,check:[4,5,15],checknan:[5,9],cifar10:13,cifar10_cnn:13,cifar:[5,6,15],circl:5,class0:5,class_id:5,class_weight:1,classic:13,classif:[5,13],classifi:13,classmethod:5,clean:0,clear:5,clear_fold:5,clearli:4,click:9,clip:5,clockwis:5,clone:3,close:5,cnn:13,cnn_classifi:13,cnn_predict:[5,6],cnn_train:[5,6,13],code:[0,1,2,3,4,8,15],col1:5,col2:5,col:5,col_map:5,collect:[0,1,3,4,5,13,20],colnam:5,color:[4,5,13],colspec:5,colum:20,column:[1,5,9,13,20],columnb:5,com:[3,5,8,21],combin:5,come:[5,13],common:[0,2,4,13],compar:13,compil:13,complet:[4,5,13],complex:13,compon:4,composit:4,comput:[1,5,9,13],compute_metr:1,concept:15,confid:9,config:0,configdict:5,configur:5,consequ:13,consist:[5,13],constrain:5,constraint:[5,13],construct:5,consum:[1,2,5,13,20],contact:5,contain:[5,9,13,20],content:13,context:5,continu:[5,13],contrast:[4,5,13],contribut:2,converg:5,convert:[5,9,13,20],convolut:13,convolution2d:13,coordin:5,copi:[0,13],corner:5,correct:5,correspond:[5,13],cos:5,could:[2,13,20],count:5,counter:5,countvalu:1,cours:13,cov:0,cover:0,coverag:0,cpu:4,cran:5,creat:[0,3,5,13],create_filenam:5,create_fold:5,create_network:[4,7,8,13],create_temp_filepath:5,creation:5,crop:[4,5,9],crop_cent:5,csv:[4,5,20],csvreader:0,current:5,custom:[2,13],dat:5,data:[0,1,2,4,5,8,9,15,20,21],databas:[4,21],datafram:5,dataset:[13,21],datatyp:5,datautil:0,deactiv:3,deep:[2,4,13],def:[2,13],defin:[4,5,13,20],degre:5,delet:5,delete_fil:5,delete_fold:5,delete_temp_data:5,delimit:5,demonstr:20,dens:13,depend:[4,5,9,13],deriv:5,describ:[0,4,13],descript:[2,5],design:[4,5],detai:5,detail:[2,4,5,9,12,13,20],determin:5,determinist:5,dev:5,dict:5,dictionari:5,differ:[4,13],dim:5,dimens:5,dir:5,direct:5,directli:[1,5,13],directori:[5,9],displai:[5,9,13],distribut:13,divid:13,doc:5,doctest:[4,5],document:[2,5],dodger487:5,doe:[5,13,20],doesn:[0,5],dog:13,don:[3,5,13],down:[5,9],downrnd:5,dply:5,dplydatafram:[5,9],dplyfram:5,dplyr:[5,20],dplython:5,dplytolist:[5,9],draw:5,drop:[5,20],dropnan:5,dropout:13,dtype:[5,13],duplic:5,e_acc:[4,13],each:[4,5,13],earli:13,easi:[2,12,13],easili:[4,13],edgecolor:5,edu:21,effect:0,effici:2,either:[5,13],element:[0,5],elimin:20,els:[1,20],empti:5,enabl:[4,5,13],encod:[5,13],encount:5,encourag:5,end:13,enhanc:5,enough:[5,13],ensur:[0,3,5,13],enter:3,entir:[5,13],enumer:5,epoch:[1,4,5,13],error:[0,1],especi:13,estim:13,eval:1,evalnut:5,evalu:[1,4,5,15],even:[5,20],everi:[5,13],every_n:5,every_sec:5,exampl:[0,2,5,15,20],exce:5,except:[5,9,13],exclus:5,exist:[3,5],exor:21,expect:[5,13,20],explain:[2,21],explan:4,express:[4,5],ext:5,extend:[2,4,12],extens:5,extract:[5,9,13],extract_patch:5,eye:5,f1_score:5,facecolor:5,factor:5,fail:5,fals:[5,13],familiar:2,faq:[0,2],far:13,fashion:13,fchollet:8,feasibl:13,figsiz:[5,13],figur:5,file:[4,5,9,13,20],filenam:[5,13],filepath:[5,13,20],filepattern:5,fileutil:0,filter:[2,4,5],filterfunc:5,fine:5,first:[5,13,20],fit:13,fix:5,flat:5,flatten:[4,5,13],flattencol:1,flip:[4,5,13],fliplr:[4,5,13],flipud:5,float32:[4,5,13],float64:5,floatimg2uint8:5,flow:[1,2,4,5,12,13,20],fmt:5,fname:20,folder:[5,13],follow:[0,1,2,3,4,5,13],foo:5,forc:[3,13],form:[5,13],format:[0,5,13],found:[4,13],fpath:5,frame:5,freeli:2,frequenc:5,from:[1,3,5,9,13,20,21],front:5,full:5,func:5,furthermor:5,gamma:5,gener:[0,4,5,13,20,21],geometr:[5,9],geometri:5,get:[1,5,13],getpatch:5,getsitepackag:3,gif:[1,5],gist:21,git:[0,3],github:[3,5,8,21],give:2,given:[5,13,20],glob:13,going:20,good:13,gpu:[2,4,5,9],grai:[1,5,13],gray2rgb:5,grayscal:5,grid:[5,9],group:5,group_bi:5,group_sampl:5,hand:[5,13],has:[0,1,5],hasattr:1,hashabl:5,hat:5,have:[2,5,13,20],haven:13,hd5:[5,13],hdf5:13,head:5,header:[5,20],height:5,help:13,here:[3,8,13,20],high:[5,9,13],highest:13,histogram:5,home:5,horizont:[5,13],hot:[5,13],how:13,howev:[5,13,20],html:[0,5],http:[3,5,8,21],ics:21,idea:13,ident:[4,5,13],ids:5,ifilt:4,ignor:5,imag:[2,4,5,9,13,20],image_channel_mean:5,image_mean:5,image_patch:5,imageannotationtomask:[5,9],imagechannelmean:[5,9],imagecol:5,imageenh:5,imageid:5,imagemean:[5,9],imagepatchesbyannot:[5,9],imagepatchesbymask:[5,9],imagepath:[5,13],images:5,imageutil:0,imarg:5,img0:13,img123:13,img19:13,img456:13,img789:13,img:[5,13],img_format:5,img_sampl:5,imgcol:5,immut:0,implement:[2,4,5,13],impress:2,imshow:5,inch:5,includ:13,inclus:5,incomplet:4,incorrect:[5,9],increas:[4,13],independ:[2,5,13],index:[1,2,5,13,20],indic:[5,13],individu:5,info:5,inform:[5,9,13],ini:0,inifil:0,inpath:5,input:[0,5,13,20],input_shap:13,insid:5,inspect:13,inspir:5,instal:[0,2],instanc:[0,1,2,4,5,13],instead:[5,13],integ:[13,20],integr:5,interpol:[5,13],interrupt:[5,13],interv:[5,13],introduc:[13,15],introduct:[0,2,5],invok:13,iri:21,is_odd:5,islic:4,isloss:[5,13],isnan:5,isnul:5,item:[0,5],iter:[0,1,4,5,9,13],itertool:[4,5],its:[2,5,13,15,20],itself:4,jpg:[1,5,13],just:[0,5],kappa:5,keep:5,kei:5,kera:[5,8,9,13],kerasnetwork:[5,9,13],keyfunc:5,keyword:5,know:3,knowledg:13,kwarg:[5,20],label2int:20,label:[1,2,5,9,13,20],labelcnt:5,labelcol:5,labeldir:5,lambda:[4,5,13,20],larg:[4,13],larger:5,largest:5,lasagn:[5,9,13],lasagnenetwork:[5,9],lasgan:5,last:[5,13],later:13,latest:[1,5],layer:[5,8],layout:[5,13],lead:4,learn:[2,4,13,21],left:5,length:5,let:13,lib:3,librari:[2,13],like:[0,5],line:[5,9,13,20],linewidth:5,link:5,linux:3,list:[0,4,5,9,13,20],load:[4,5,9,15,20],load_config:5,load_data:[13,20],load_imag:5,load_iri:21,load_nam:7,load_sampl:[4,7,8,13],load_weight:5,loader:4,locat:[5,9],log:[4,5,9],log_col:5,logcol:[5,9],logger:[0,4],logic:20,look:[2,13],loss:[2,4,5,9,13],lower:5,lumin:5,mac:3,machin:[4,21],maet3608:3,maet:[0,3,5],make:[0,5,20],makefirst:5,manag:5,mani:[4,5,13,20],manner:5,map:[5,13,20],map_transform:5,mapcol:20,mask:[5,9],mask_choic:5,mask_patch:5,mask_wher:5,maskcol:5,master:8,match:5,mathemat:5,matplotlib:5,matrix:5,max:5,maximum:5,maxpooling2d:13,mayb:20,mchirico:21,mean:[1,4,5,9,13],measur:13,memori:[5,13,20],messag:1,method:[5,13,20],metric:[5,13],mini:[4,5,13],minimum:5,miss:[0,5],mix:4,mlp_predict:[5,6],mlp_train:[5,6],mlp_view_misclasifi:[5,6],mnist:[5,6,13],mnist_cnn:8,mnist_mlp:8,mode:[4,5],model:[5,13],modifi:[2,4,8,13],modul:2,monochrom:5,monolith:4,more:[4,5,9,13,20],most:5,move:[5,20],multi:8,multipl:[1,5],must:5,mutat:0,mxn:5,mxnx1:5,mxnx3:5,mxnx4:5,mxnxc:5,my_bright:13,my_project:3,my_python_path:3,name:[0,5,9,13],nan:[5,9],ndarrai:[5,13],nearest:5,necessari:[4,5],need:[0,1,4,5,13,20],neg1:5,neg2:5,neg:[3,5],nest:4,network:[0,1,2,4,9,15],neural:[4,5,13],new_max:5,new_min:5,newlin:20,next:13,nice:[5,13],nneg:5,no_alpha:5,non:5,none:[5,13],normal:5,normalize_histo:5,notabl:13,notblack:2,note:[5,13,20],noth:5,now:13,npatch:5,npo:5,npy:[1,5],npz:5,num_class:[4,5,13],num_epoch:[4,13],number:[0,5,13,20],numer:[5,20],numpi:[1,5,9,13],nut:[0,3,4,5,6,7,8,9,13,15,20],nut_color:5,nut_filt:2,nut_funct:20,nut_grayscal:5,nut_sourc:20,nutfunct:5,nutmsml:5,nutsflow:[1,3,5,20],nutsink:5,nutsml:[0,2,3,4,13,20],nutsourc:5,nx2:5,object:[5,13],often:[4,13],old_max:5,old_min:5,omit:13,onc:20,one:[5,13],one_hot:[4,5,13],ones:5,onli:[5,13],open:[3,5,20],oper:[4,5,20],optim:13,order:5,org:5,organ:[4,5,13],origin:[5,13],other:[4,5,9,13],otherwis:[0,5],out:2,out_lay:5,output:[0,1,5,13],over:[0,2,5,9,13],overal:2,overview:2,own:[2,12],packag:[2,3],pad:13,page:2,panda:[4,5,9,20],pandas_t:5,paramet:[5,13],parser:5,part:13,partial:13,partit:[5,9],partitionbycol:[5,9],pass:[0,5,13],patch:[5,9],patch_it:5,patches_api:5,path:[5,9,13],pathfunc:5,pattern:5,paus:[5,13],pep:0,per:[5,9,13],perceptron:8,perform:[4,5,13],perturb:13,peski:20,picel:5,pick:[5,13],pickl:5,piec:13,pil:5,pil_img:5,pil_to_arr:5,pillow:5,pip:3,pipelin:[6,7,8,13],pixel:[5,13],plain:1,platform:0,pleas:[0,13],plot:[4,5,9],plot_ev:13,plotarg:5,plotlin:[5,9,13],plotter:0,plug:2,pluggi:0,plugin:0,png:[1,5,13],point:[4,5,15],polylin:5,pool_siz:13,pos1:5,pos2:5,pos3:5,pos:[3,5],posit:[5,13],possibl:5,powerful:20,practic:13,pre:[2,4],preced:5,precis:5,pred_batch:13,pred_fn:5,predcol:5,predict:[5,15],predictnut:5,prefer:0,prefetch:5,prefix:5,preprocess:8,prerequisit:13,press:5,print:[2,3,4,5,9,13,20],print_lay:5,printcoltyp:[5,9,13],printprogress:[4,13],prob:5,probabl:[0,1,5,13],problem:13,process:[2,4,5,9,13],processor:0,progress:4,project:0,properti:5,provid:[0,2,4,5,13,15],pshape:5,push_doc:0,pypi:3,pyplot:5,pyplot_api:5,pytest:[0,3],python:[0,3,4,13,20],quick:2,rais:[5,9],rand:5,random:[4,5,9,13],random_downsampl:5,randomimagepatch:[5,9],randomli:[5,9,13],rang:[0,4,5,13],ratio:5,rbg:5,reach:13,read:[0,2,4,5,9,15],read_imag:[2,5,6,13],readabl:[4,13],readcsv:[0,20],reader:[0,4],readimag:[1,5,9,13],reading_sampl:0,readlabeldir:[5,9,13],readpanda:[5,9,20],readthedoc:5,rearrang:13,reason:13,recent:5,recognit:13,recommend:2,recreat:5,rect:5,rectangular:5,refer:[5,20],regard:5,region:5,regist:[5,13],regular:[5,9,13],regularimagepatch:[5,9],rel:5,relat:5,relev:5,relu:13,remain:[4,5,20],remaind:13,remov:[5,20],replac:[5,13],replacenan:5,report:13,repres:[5,13],represent:5,request:5,requir:13,rerang:[4,5,13],rescal:5,reset:5,reshap:5,resiz:[4,5,13],respect:5,result:[1,5],retlabel:5,retriev:13,retvalu:13,reusabl:2,rgb2grai:5,rgb:[1,5,13],rgb_arr:5,rgba:[1,5,13],right:5,rnd:5,robust:4,rootdir:0,rotat:[4,5,9,13],round:5,routin:5,row:5,row_vector:5,rst:0,rstudio:5,run:[0,1,3,13],runtimeerror:5,same:[0,4,5,13],same_lett:5,sampl:[1,2,3,4,5,9,13],sample_labeled_patch_cent:5,sample_mask:5,sample_patch_cent:5,sample_pn_patch:5,save:[5,13],save_best:[5,13],save_imag:5,save_weight:5,scale:[1,4,5,13],scatter:5,scikit:5,score:5,screen:5,script:3,search:[2,5],sec:5,second:[0,1,5,13,20],section:13,see:[0,1,4,5,8,12,13],seed:5,seen:13,select:[5,9],self:5,sequenc:[5,13],sequenti:[5,13],session:[0,5],set:[4,5,13,21],setup:3,shape:[1,5,13],shapeprop:5,shapestr:5,share:4,sharp:5,shear:[4,5,13],shear_factor:5,shell:3,shift:5,ship:13,should:[0,5,20],show:[4,5,13],show_imag:13,shown:[5,13],shuffl:[2,4,13],side:0,simpli:5,simplifi:[13,20],sin:5,sinc:[5,13],singl:[5,13],sink:[0,13],site:3,size:[4,5,13],skim:2,skimag:5,skip:[0,4,5],sklearn:21,slightli:13,small:13,smaller:5,smallest:[5,13],softmax:[5,13],softwar:3,some:[2,4,5,13,20],someth:5,sometim:5,sourc:[0,3,4,5,7,8],spec:5,special:5,specif:[4,5,13,20],specifi:[5,13,20],speed:5,sphinx:0,spline36:13,split:[4,5,9,13,20],splitrandom:[5,9,13],splitter:4,squar:0,ssss:0,stabl:5,stack:13,standard:[1,13],start:[0,2,5],statement:13,stefan:5,step:[4,5,20],stmt:0,stop:[5,13],store:[4,5,13],str:5,strategi:13,stratif:[5,21],stratifi:[0,2,3,4,9],stream:13,stride:5,strin:5,string:[5,20],strip:20,structur:[5,20],sub:[5,13],sub_mean:5,submodul:6,subsampl:5,subtract:[5,9],suffici:5,sum:[2,5],support:5,syntax:5,system:[5,9,13],t_acc:[4,13],t_loss:[1,4,13],tabl:[4,5,9,20],take:[4,5,13],target:5,targetcol:5,task:[4,15],tast:2,tech:13,temp:5,temp_fold:5,temp_logfil:5,temp_plott:5,temporari:5,test0:5,test11:5,test1:5,test:[4,5,9,13,20],test_:5,test_batch:0,test_boost:0,test_common:0,test_config:0,test_datautil:0,test_fileutil:0,test_imageutil:0,test_logg:0,test_network:0,test_read:0,test_sampl:[4,13],test_stratifi:0,test_transform:0,test_view:0,test_writ:0,text:[4,5,20],textprop:5,than:[5,13],theano:5,thei:5,them:[13,20],themselv:13,therefor:[13,20],thi:[4,5,8,13,15],third:5,three:13,threshold:2,through:[4,13],tif:[1,5],time:5,todo:[10,11,14,16,17,18,19],togeth:13,toi:20,tolist:5,too:13,total:0,traceback:5,train:[1,2,4,5,7,8,9,15],train_fn:5,train_loss:5,train_sampl:[2,4,13],trainvalnut:5,transform:[0,2,4,9],transformimag:[4,5,9,13],translat:[5,9],transspec:5,truth:20,tsv:5,tupl:[0,5,13,20],tutori:[0,2,4,13],two:[5,13],txt:5,type:[0,4,5,9,13],typeerror:1,typic:[4,5,13,20],uci:21,uint16:5,uint8:[4,5,13],unalt:5,unchain:5,unchang:[5,13],under:[1,4,5,13],uniformli:13,uniqu:5,unit:2,unstructur:4,unzip:[4,13],updat:0,upgrad:1,upper:5,upsampl:5,usag:[5,15],use:[5,8,13,20],used:[1,5,13],useful:13,user:5,uses:[5,13],using:[5,9,13],usual:[5,13],util:5,v_acc:13,v_loss:13,val:[5,13],val_fn:5,val_loss:5,val_sampl:13,valid:[4,5,9,15],valu:[5,9,13],valueerror:5,variou:5,vector:[5,13],veri:2,verif:0,verifi:13,version:[1,3,13],vertic:5,via:[3,5,13,20],video:4,view:[5,9],view_train_imag:[5,6],viewer:0,viewimag:[5,9,13],viewimageannot:[5,9,13],vignett:5,virtualenv:3,visual:5,vnut:3,vstack:5,wai:13,wait:5,want:[3,5,13],web:5,weight:[4,5,13],weights_cifar10:13,weights_keras_net:5,weights_lasagne_net:5,weightsfil:13,weightspath:5,welcom:0,well:20,were:[5,13],what:[13,20],when:[1,4,5,13],where:[1,3,5,13],which:[4,5,13,20],width:5,wildcard:5,win32:0,window:[3,5,9],wise:5,within:[5,13],without:[0,13],word:5,work:[3,13],would:13,wrap:[4,5,9,13],wrapper:[5,9,13],write:[5,9,15],write_imag:[5,6,13],writeimag:[5,9,13],writer:0,written:[4,5],x32x3:13,x_test:13,x_train:13,xcol:5,xlsx:5,xrang:[1,4,5,13],y_test:13,y_train:13,yaml:5,yco:5,ycol:5,yes:20,you:[0,1,2,3,13],your:[2,3,12],ysin:5,zero:5,zip:[5,13]},titles:["Contributions","FAQ","Welcome to nuts-ml","Installation","Introduction","nutsml package","nutsml.examples package","nutsml.examples.cifar package","nutsml.examples.mnist package","Overview","Batching","Configuration","Custom nuts","CIFAR-10 Example","Image processing","Tutorial","Loading images","Logging","Network","Plotting","Reading samples","Splitting and stratifying"],titleterms:{"class":1,"default":1,arrai:1,augment:13,batch:[1,10,13],batcher:5,bleed:3,booster:5,can:1,canon:4,check:13,cifar:[7,13],cnn_predict:[7,8],cnn_train:[7,8],code:13,common:5,config:5,configur:11,content:[5,6,7,8],contribut:0,convert:1,custom:12,data:13,datautil:5,document:0,edg:3,environ:[0,3],evalu:13,exampl:[4,6,7,8,13],faq:1,fileutil:5,flatten:1,format:1,guid:0,how:1,imag:[1,14,16],imageutil:5,imbalanc:1,indic:2,instal:3,introduct:4,kera:1,length:1,librari:4,load:[13,16],log:17,logger:5,mlp_predict:8,mlp_train:8,mlp_view_misclasifi:8,mnist:8,modul:[5,6,7,8],network:[5,13,18],nut:[1,2,12],nutsml:[5,6,7,8],onli:1,overview:9,packag:[5,6,7,8],pipelin:4,plot:19,plotter:5,point:13,predict:[1,13],process:14,python:1,read:[1,13,20],read_imag:[7,8],reader:5,represent:1,result:13,sampl:20,scalar:1,split:21,standard:3,stratifi:[5,21],style:0,submodul:[5,7,8],subpackag:[5,6],task:13,test:0,todo:20,train:13,transform:[5,13],tutori:15,unit:0,upgrad:3,use:1,valid:13,verif:3,view_train_imag:[7,8],viewer:5,virtual:3,weight:1,welcom:2,what:1,write:13,write_imag:[7,8],writer:5}})