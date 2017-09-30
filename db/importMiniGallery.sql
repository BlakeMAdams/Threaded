select materials.id as mat_id, materials.name as mat_name, gallery.category, gallery.name, gallery.image from gallery
JOIN materials on materials.id = gallery.material