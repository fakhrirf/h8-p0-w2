var nama = 'Danu';
var peran = 'Tabib';

if (nama === '' && peran == '') {
    console.log('Nama harus di isi!')
}
else if (nama === 'Mikael' && peran === '') {
    console.log('Halo Mikael, Pilih peranmu untuk memulai game!')
} 
else if (nama === 'Mikaela' && peran === 'Ksatria') {
    console.log("Selamat datang di Dunia Proxytia, Mikaela")
    console.log("Halo Ksatria Mikaela, kamu dapat menyerang dengan senjatamu!")
}

else if (nama === 'Danu' && peran === 'Tabib') {
    console.log ("Selamat datang di Dunia Proxytia, Danu")
    console.log ("Halo Tabib Danu, kamu akan membantu temanmu yang terluka.")
}

else if ( nama === 'Zero' && peran === 'Penyihir') {
    console.log ("Selamat datang di Dunia Proxytia, Zero")
    console.log ("Halo Penyihir Zero, ciptakan keajaiban yang membantu kemenanganmu!")
}

else {
    console.log("Maaf ulangi lagi")
}