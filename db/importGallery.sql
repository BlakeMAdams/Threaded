select materials.id as mat_id, materials.image as mat_img, materials.category as mat_cat, materials.name as mat_name, gallery.category, gallery.name, gallery.image, materials.base_color from gallery
JOIN materials on materials.id = gallery.material