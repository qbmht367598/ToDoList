$(function(){
 $('.add').click(function(){
   let inputTask=$('.task');　　　 　//入力欄の取得
   let task=inputTask.val();　　　 　//入力値の取得
   let li=$('<li>');　              //liタグ作成
   li.addClass('tasks-list-item');　　　　　　　
   let list=$('<div>');　　　　　　   //divタグ作成
   list.text(task);  　　　　　　　　 //divに入力値追加
   li.append(list); 　　　　　　　　　//liタグにdivタグ追加
   
   let btn=$('<div>');             //divタグ作成
   let remove=$('<button>');       //buttonタグ作成
   remove.text('削除');             //buttonにテキスト追加

   //remove.click(removeTask);
   remove.on('click',function(){
    let task=$('this').closest('li');
    task.remove();
   });

   btn.append(remove);　　　　　　　//divにbuttonタグ追加
   li.append(btn);　　　　　　　　　//liにdiv追加
   
   $('.tasks-list').append(li);　　　//ulにliを追加
 });

 //function removeTask(){
   //let task=$('this').closest('li');
   //task.remove();
 //}
 
});