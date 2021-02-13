        var mymusic = document.createElement("audio");
        var monvolume = 10;
        var srce1 = "beautiful trauma-pink.mp3";
        var srce2 = "chunky-bruno mars.mp3";
        var srce3 = "bob marley-dadju.mp3";
        var srce4 = "la même-maitre gims.mp3";
        var entreeplaylist = 0;
        var duree;
        var sortie;
        var temps;
        var f = 0;
        var titre;
        var chanteur;
        var source;
        var result;
        var playliststock;
        var postiret;
        var valueInputRechercher = "";
        var tablo = ['beautiful trauma-pink', 'chunky-bruno mars', 'bob marley-dadju', 'la même-maitre gims', 'AC DC - Greatest hits', 'Bob Marley & the Wailers -Concert', 'Tino Rossi - Petit Papa Noël', 'VITAA SLIMANE - Je te le donne ', 'Coldplay - A Sky Full Of Stars', 'Coldplay - Something Just Like This', 'VITAA & SLIMANE - Avant toi', 'VITAA & SLIMANE - Ça ira', 'beautiful trauma-pink', 'chunky-bruno mars', 'bob marley-dadju', 'la même-maitre gims', 'AC DC - Greatest hits', 'Bob Marley & the Wailers -Concert', 'Tino Rossi - Petit Papa Noël', 'VITAA SLIMANE - Je te le donne ', 'Coldplay - A Sky Full Of Stars', 'Coldplay - Something Just Like This', 'VITAA & SLIMANE - Avant toi', 'VITAA & SLIMANE - Ça ira', 'beautiful trauma-pink', 'chunky-bruno mars', 'bob marley-dadju', 'la même-maitre gims', 'AC DC - Greatest hits', 'Bob Marley & the Wailers -Concert', 'Tino Rossi - Petit Papa Noël', 'VITAA SLIMANE - Je te le donne ', 'Coldplay - A Sky Full Of Stars', 'Coldplay - Something Just Like This', 'VITAA & SLIMANE - Avant toi', 'VITAA & SLIMANE - Ça ira', 'beautiful trauma-pink', 'chunky-bruno mars', 'bob marley-dadju', 'la même-maitre gims', 'AC DC - Greatest hits', 'Bob Marley & the Wailers -Concert', 'Tino Rossi - Petit Papa Noël', 'VITAA SLIMANE - Je te le donne ', 'Coldplay - A Sky Full Of Stars', 'Coldplay - Something Just Like This', 'VITAA & SLIMANE - Avant toi', 'VITAA & SLIMANE - Ça ira', 'beautiful trauma-pink', 'chunky-bruno mars', 'bob marley-dadju', 'la même-maitre gims', 'AC DC - Greatest hits', 'Bob Marley & the Wailers -Concert', 'Tino Rossi - Petit Papa Noël', 'VITAA SLIMANE - Je te le donne ', 'Coldplay - A Sky Full Of Stars', 'Coldplay - Something Just Like This', 'VITAA & SLIMANE - Avant toi', 'VITAA & SLIMANE - Ça ira', 'beautiful trauma-pink', 'chunky-bruno mars', 'bob marley-dadju', 'la même-maitre gims', 'AC DC - Greatest hits', 'Bob Marley & the Wailers -Concert', 'Tino Rossi - Petit Papa Noël', 'VITAA SLIMANE - Je te le donne ', 'Coldplay - A Sky Full Of Stars', 'Coldplay - Something Just Like This', 'VITAA & SLIMANE - Avant toi', 'VITAA & SLIMANE - Ça ira', 'beautiful trauma-pink', 'chunky-bruno mars', 'bob marley-dadju', 'la même-maitre gims', 'AC DC - Greatest hits', 'Bob Marley & the Wailers -Concert', 'Tino Rossi - Petit Papa Noël', 'VITAA SLIMANE - Je te le donne ', 'Coldplay - A Sky Full Of Stars', 'Coldplay - Something Just Like This', 'VITAA & SLIMANE - Avant toi', 'VITAA & SLIMANE - Ça ira', 'beautiful trauma-pink', 'chunky-bruno mars', 'bob marley-dadju', 'la même-maitre gims', 'AC DC - Greatest hits', 'Bob Marley & the Wailers -Concert', 'Tino Rossi - Petit Papa Noël', 'VITAA SLIMANE - Je te le donne ', 'Coldplay - A Sky Full Of Stars', 'Coldplay - Something Just Like This', 'VITAA & SLIMANE - Avant toi', 'VITAA & SLIMANE - Ça ira', 'beautiful trauma-pink', 'chunky-bruno mars', 'bob marley-dadju', 'la même-maitre gims', 'AC DC - Greatest hits', 'Bob Marley & the Wailers -Concert', 'Tino Rossi - Petit Papa Noël', 'VITAA SLIMANE - Je te le donne ', 'Coldplay - A Sky Full Of Stars', 'Coldplay - Something Just Like This', 'VITAA & SLIMANE - Avant toi', 'VITAA & SLIMANE - Ça ira', 'beautiful trauma-pink', 'chunky-bruno mars', 'bob marley-dadju', 'la même-maitre gims', 'AC DC - Greatest hits', 'Bob Marley & the Wailers -Concert', 'Tino Rossi - Petit Papa Noël', 'VITAA SLIMANE - Je te le donne ', 'Coldplay - A Sky Full Of Stars', 'Coldplay - Something Just Like This', 'VITAA & SLIMANE - Avant toi', 'VITAA & SLIMANE - Ça ira', 'beautiful trauma-pink', 'chunky-bruno mars', 'bob marley-dadju', 'la même-maitre gims', 'AC DC - Greatest hits', 'Bob Marley & the Wailers -Concert', 'Tino Rossi - Petit Papa Noël', 'VITAA SLIMANE - Je te le donne ', 'Coldplay - A Sky Full Of Stars', 'Coldplay - Something Just Like This', 'VITAA & SLIMANE - Avant toi', 'VITAA & SLIMANE - Ça ira', 'beautiful trauma-pink', 'chunky-bruno mars', 'bob marley-dadju', 'la même-maitre gims', 'AC DC - Greatest hits', 'Bob Marley & the Wailers -Concert', 'Tino Rossi - Petit Papa Noël', 'VITAA SLIMANE - Je te le donne ', 'Coldplay - A Sky Full Of Stars', 'Coldplay - Something Just Like This', 'VITAA & SLIMANE - Avant toi', 'VITAA & SLIMANE - Ça ira'];
        var present = -1;

        var chaineaddition;

        formation();
        scradd(0);
        affichagelisting();
        sonplus();

        reorganisationplaylist();
        affichagelisting();
        setInterval("courant()", 500);
        // func formation titre/chanteur
        //    <div class="cadrep" onclick="scr4()">
        //                    <img class="fit-picture" src="media/175/4.jpg" alt="photo pochette cd taille grand">
        //                    <div class="titreArtiste">LA MEME</div>
        //                    <div class="NomArtiste">MAITRE GIMS</div>
        //              </div>
        //*************fonction barre de recherche
        function selectionMusic(event) {
            valueInputRechercher = (event.target.value);
            valueInputRechercher = valueInputRechercher.toUpperCase();

            formation();
        }



        function formation() {
            chaineaddition = "";
            var chainetraitee;
            if (valueInputRechercher == "") {
                valueInputRechercher = "---";
            }
            for (r = 0; r < (tablo.length); r++) {

                present = ((tablo[r].toString()).toUpperCase()).indexOf(valueInputRechercher);


                if (valueInputRechercher == "---" || present > -1) {
                    chaineaddition = chaineaddition + '<div class="cadrep" onclick="scradd(' + (r.toString()) + ')">';
                    chaineaddition = chaineaddition + '<img class="fit-picture" src="media/175/' + tablo[r] + '.jpg" alt="photo pochette cd">';
                    postiret = tablo[r].indexOf('-');
                    chainetraitee = tablo[r].slice(postiret + 1).toUpperCase();
                    chaineaddition = chaineaddition + '<div class="titreArtiste">' + (tablo[r].substring(0, postiret).toUpperCase()) + '</div>';
                    chaineaddition = chaineaddition + '<div class="NomArtiste">' + (chainetraitee) + '</div>' + '</div>';
                }

            }

            document.getElementById("addition").innerHTML = chaineaddition;

        }
        // func scradd
        function scradd(ii) {
            finaddlist();

            mymusic.src = tablo[ii] + ".mp3";

            source = "";
            source = tablo[ii] + ".mp3";
            titrecchanteur();
        }


        function addplay() {
            for (i = 0; i < 10; i++) {

                if (localStorage.getItem("playlisting" + i.toString()) === null || localStorage.getItem("playlisting" + i.toString()) === undefined || localStorage.getItem("playlisting" + i.toString()) == "***EMPTY*******" || localStorage.getItem("playlisting" + i.toString()) == "***EMPTY***") {
                    localStorage.setItem("playlisting" + i.toString(), source);

                    affichagelisting();
                    // alert(localStorage.getItem("playlisting" + i.toString())+"---"+source); 
                    i = 10;

                    // alert(localStorage.getItem("playlisting" +(0).toString())); 
                    break;
                }

            }

            affichagelisting();
            //controle si playlist pleine
            playliststock = 0;
            for (w = 0; w < 10; w++) {
                if ((localStorage.getItem("playlisting" + w.toString())) != null && (localStorage.getItem("playlisting" + w.toString())) != undefined && localStorage.getItem("playlisting" + w.toString()) != "***EMPTY*******" && localStorage.getItem("playlisting" + w.toString()) != "***EMPTY***") {
                    playliststock++;
                }
            }
            if (playliststock > 9) {
                alert("La playList est pleine " + playliststock);
            }
        }

        function demarreplaylist() {
            f = 0;
            entreeplaylist = 1;
            affichagelisting();
            reorganisationplaylist();
            affichagelisting();
            playlist2();
        }

        function playlist2() {
            if (localStorage.getItem("playlisting" + f.toString()) !== undefined || localStorage.getItem("playlisting" + f.toString()) !== null || localStorage.getItem("playlisting" + f.toString()) != "***EMPTY*******" && entreeplaylist == 1) {

                mymusic.src = localStorage.getItem("playlisting" + f.toString());
                source = "";
                source = localStorage.getItem("playlisting" + f.toString());

                sonplus();
                titrecchanteur();
                lecture();
                setInterval("courant()", 500);

            }
            f++;
        }




        function vider(x) {
            localStorage.setItem("playlisting" + x.toString(), "***EMPTY*******");
            affichagelisting();
            reorganisationplaylist();
            affichagelisting();
        }

        function affichagelisting() {
            for (z = 0; z < 10; z++) {
                if (localStorage.getItem("playlisting" + z.toString()) !== null && localStorage.getItem("playlisting" + z.toString()) !== undefined && localStorage.getItem("playlisting" + z.toString()) != "***EMPTY*******" && localStorage.getItem("playlisting" + z.toString()) != "***EMPTY***") {
                    document.getElementById("titre" + z.toString()).textContent = localStorage.getItem("playlisting" + z.toString()).substring(0, localStorage.getItem("playlisting" + z.toString()).length - 4).toUpperCase();
                } else {
                    document.getElementById("titre" + z.toString()).textContent = "***EMPTY*******"
                    localStorage.setItem("playlisting" + (z.toString()), "***EMPTY*******");
                }
            }

        }

        function reorganisationplaylist() {
            for (gh = 0; gh < 11; gh++) {
                for (w = 0; w < 9; w++) {
                    if (localStorage.getItem("playlisting" + w.toString()) === null || localStorage.getItem("playlisting" + w.toString()) === "***EMPTY*******" || localStorage.getItem("playlisting" + w.toString()) === "***EMPTY***" || localStorage.getItem("playlisting" + w.toString()) === undefined) {

                        localStorage.setItem("playlisting" + w.toString(), localStorage.getItem("playlisting" + (w + 1).toString()));
                        document.getElementById("titre" + w.toString()).textContent = localStorage.getItem("playlisting" + (w + 1).toString())
                        localStorage.setItem("playlisting" + (w + 1).toString(), "***EMPTY*******");
                        document.getElementById("titre" + (w + 1).toString()).textContent = "***EMPTY*******"
                    }
                }
            }
        }


        function titrecchanteur() {
            var phase = 0;
            titre = "";
            chanteur = "";
            for (i = 0; i < source.length; i++) {
                if (source[i] == "-") {
                    phase = 1;
                }
                if (source[i] == ".") {
                    phase = 2;
                }

                if (phase == 0) {
                    titre = titre + source[i].toUpperCase();
                }
                if (phase == 1) {
                    chanteur = chanteur + source[i].toUpperCase();
                }
                document.getElementById("nomArtiste").textContent = chanteur;
                document.getElementById("titreChanson").textContent = titre;
                sortie = 0;
            }


        }

        function finaddlist() {
            f = 0;
            entreeplaylist = 0;
            sortie = 0;


        }

        function lecture() {
            mymusic.play();
            duree = mymusic.duration;
            sortie = 1;
            document.getElementById("rangeAvancement").value = (Math.round(100 * (mymusic.currentTime) / duree)).toString();
            setInterval("courant()", 500);
        }

        function courant() {
            duree = mymusic.duration;
            if (sortie == 1 || entreeplaylist == 1) {
                document.getElementById("rangeAvancement").value = (Math.round(100 * (mymusic.currentTime) / duree)).toString();
            }
            if (entreeplaylist == 1 && (Math.round(100 * (mymusic.currentTime) / duree) > 99.9)) {
                playlist2();
            }
        }

        function pausee() {
            mymusic.pause();
        }

        function stopit() {
            mymusic.stop();
        }

        function sonplus() {
            if (monvolume < 10) {
                monvolume = monvolume + 1;
                mymusic.volume = monvolume / 10;
            }
            document.getElementById("rangeVolume").value = (10 * monvolume).toString();
        }

        function sonmoins() {
            if (monvolume > 0) {
                monvolume = monvolume - 1;
                mymusic.volume = monvolume / 10;
            }
            document.getElementById("rangeVolume").value = (10 * monvolume).toString();
        }

        function ajourvolume() {
            monvolume = (parseInt(document.getElementById("rangeVolume").value)) / 10;
            monvolume = monvolume - 1;
            sonplus();

        }

        function ajourtemps() {
            temps = (parseInt(document.getElementById("rangeAvancement").value)) * duree / 100;
            mymusic.currentTime = temps;
        }

        function avancer() {
            temps = (parseInt(document.getElementById("rangeAvancement").value)) * duree / 100;
            if (temps + 20 < duree) {
                mymusic.currentTime = temps + 20;

            }
        }

        function reculer() {
            temps = (parseInt(document.getElementById("rangeAvancement").value)) * duree / 100;
            if (temps - 5 > 0) {
                mymusic.currentTime = temps - 5;

            }
        }
