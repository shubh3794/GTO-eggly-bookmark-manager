var app= angular.module('MyFirst',[]);
app.controller('MainCtrl', function () {
	var bmc=this;
	bmc.categories=[
         			{"id": 0, "name": "Development"},
          			{"id": 1, "name": "Design"},
          			{"id": 2, "name": "Exercise"},
         			{"id": 3, "name": "Humor"}
     				 ];

	bmc.bookmarks=[
				    {"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development" },
				    {"id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development" },
				    {"id": 2, "title": "A List Apart", "url": "http://alistapart.com/", "category": "Design" },
				    {"id": 3, "title": "One Page Love", "url": "http://onepagelove.com/", "category": "Design" },
				    {"id": 4, "title": "MobilityWOD", "url": "http://www.mobilitywod.com/", "category": "Exercise" },
				    {"id": 5, "title": "Robb Wolf", "url": "http://robbwolf.com/", "category": "Exercise" },
				    {"id": 6, "title": "Senor Gif", "url": "http://memebase.cheezburger.com/senorgif", "category": "Humor" },
				    {"id": 7, "title": "Wimp", "url": "http://wimp.com", "category": "Humor" },
				    {"id": 8, "title": "Dump", "url": "http://dump.com", "category": "Humor" }
				   ];


	bmc.currentCategory=null;
	function currentCat(cat){
				 bmc.currentCategory=cat;

				};


	bmc.setCurrentCategory=currentCat;			
	bmc.Edited=null;			  
	bmc.isEditing=false;
	bmc.isCreating=false;
	function startCreating(){
		bmc.isCreating=true;
		bmc.isEditing=false;
	}
	function startEditing(){
		bmc.isCreating=false;
		bmc.isEditing=true;
	}
	bmc.startCreating= startCreating;
	bmc.startEditing=startEditing;
	function cate(cat){
		return bmc.currentCategory===cat;

	};
	bmc.isCurrentCategory=cate;
	function shouldshowcreating(){
		return !bmc.isEditing && bmc.currentCategory;
	};
	function shouldshowediting(){
		return bmc.isEditing&&!bmc.isCreating&&bmc.Edited;
	};
	bmc.shouldShowCreating=shouldshowcreating;
	bmc.shouldShowEditing=shouldshowediting;
	function resetform(){
		bmc.newbookmark={
			title:"",
			url:"",
			category:bmc.currentCategory
		};
	};
	//creating bookmark
	function createbookmark(bmk)
		{
		bmk.id=bmc.bookmarks.length;
		bmc.bookmarks.push(bmk);
		resetform();
	};
	bmc.createbookmark=createbookmark;
function cancelCreating() {
          bmc.isCreating = false;
      }
      bmc.cancelCreating = cancelCreating;
//editing
function setEdited(x)
{
	bmc.Edited=angular.copy(x);
};

bmc.setEdited=setEdited;
	function updatebookmark(bmk)
		{
		var index=_.findIndex(bmc.bookmarks,function(b){
				return b.id==bmk.id;
		});
		bmc.bookmarks[index]=bmk;
		bmc.isEditing=false;
		bmc.Edited=null;
	};
	bmc.UpdateBookmark=updatebookmark;
function cancelEditing() {
          bmc.isEditing = false;
      }
      bmc.cancelEditing = cancelEditing;

 //bookmark delete
 function deletebkm(bmk)
 {
 	var index=_.findIndex(bmc.bookmarks,function(b){
				return b.id==bmk.id;
		});
 	bmc.bookmarks.splice(index,1);
 	bmc.isEditing=false;
 	bmc.Edited=null;

 };
 bmc.deletebkm=deletebkm;

});
