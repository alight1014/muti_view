<?php
$id = $_GET['id'];
?>
<div class="hero-unit">
  <h1>title <?=$id?></h1>
  <p ng-click="showMsg('<?=$id?>')">detail <?=$id?></p>
</div>
