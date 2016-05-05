<?php
print views_embed_view('gallery_images','block', $node->nid);
?>
<a id="back" href="/gallery-page">Back</a>
<?php
print views_embed_view('gallery_inner_page','page', $node->nid);

?>