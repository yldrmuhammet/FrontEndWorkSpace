## Muhammet YILDIRIM Merge Sort Projesi

## Patika Linkim 

https://app.patika.dev/myldrm

<a href="https:///www.linkedin.com/in/muhammet--yildirim" target="_blank" rel="noopener noreferrer"> <img src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-5.png" alt="Git hub Link" height="40" style="vertical-align:top; margin:6px color:white" width= "40"> </a>
<br>
<img src ="https://media.giphy.com/media/JlVkLKuxRSvLy/giphy.gif" align="right" width="200" heigh="200">

### Merge Sort PROJESİ

Bu algoritma diziyi ardışık olarak en küçük alt dizilere yarılar ve tek bir eleman kalana kadar bu işleme devam eder. 
Tek kalan elemanları birbirleri ile karşılaştırarak tekrar birleştiren algoritmadır.
 
                            [16,21,11,8,12,22] 

Bu diziyi merge sort algoritması ile sıralayacağız.

| İşlemler                                                                                                   | Elemanlar                             |
|------------------------------------------------------------------------------------------------------------|---------------------------------------|
| Dizi elemanları yazılır.                                                                                   | [16,21,11,8,12,22]                    |
| Bu dizi yarılanır ve iki alt dizi oluşturulur.                                                             | [16,21,11]  ---- [8,12,22]            |
| Dizi tekrar yarılanır. Alt kümelerin eleman sayısı 3 olduğu için 2 ve 1 olarak ayrılırlar.                 | [16] --- [21,11] ---- [8] --- [12,22] |
| Tekrar bölünme işlemi yapılır ve her elemanın tek kalması sağlanır.                                        | [16] --- [21] -- [11] ---- [8] --- [12] -- [22] |
| Elemanlar tek kaldıktan sonra birleştirme işlemi başlar.(Tire sayısı az olanlar ilk sıraya göre birleşir.) | [16] --- [11,21] ---- [8] --- [12,22] |
| Sıralama ve birleştirme işlemi devam eder.                                                                 | [11,16,21] ---- [8,12,22] |
| Birleşme işlemi sonunda 2 alt dizi kaldı bunlar da kendi aralarında birleşerek sıralamayı tamamlarlar.     | [8,11,12,16,21,22] |

Böylelikle sıralama işlemi bitmiş olur.

Elemanların birleşme işlemi sırasında dizilerde en soldaki eleman en küçük elemandır, en sağdaki eleman ise en büyük elemandır.
Bunu bilir ve buna göre hangisi daha küçükse birleşen dizide en küçük eleman olarak yazılır, bu karşılaştırma işlemi alt dizilerde devam eder bir üst diziye sıralanmış şekilde gelirler.

## Big O Gösterimi 

- Diziyi parçalara ayırırken sürekli yarıladık yani 2'ye böldük. Bunun sonucunda

                                        2^x=n ==> logn
kere bölme işlemi yapmış oluruz.

- Bölünmüş diziyi birleştirirken dizinin uzunluğu olan n kadar birleştirme işlemi yapılır.
Bunun sonucunda algoritmanın maliyeti Big O Notasyonunda

                                        O(n.logn)

sonucuna ulaşılır.
Bizim dizimizde eleman sayısı 6 olduğu için sonuç
 
                                        6.log6 

olacaktır.
