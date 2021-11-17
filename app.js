/*
* mettre à jour le texte d'un paragraphe avec le texte donné en paramètre.*/
function pasDinspi (id, texte) {
    let element = document.getElementById(id);
    element.innerHTML = texte;
}

pasDinspi("p1", "hello");
pasDinspi("p2", "bonjour");
pasDinspi("p3", "salam");
pasDinspi("p4", "pas d'inspi");

