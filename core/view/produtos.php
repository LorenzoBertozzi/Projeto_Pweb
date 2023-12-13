<div class="container mt-5">
        <h2 class="mb-4">Nossos Produtos</h2>

        <div class="row">
            <?php foreach($produtos as $produto):?>
            <div class="col-md-4 mb-4">
                <div class="card">
                    <a href="pagina do produto">
                    <?php                     
                        $imagemBlob = $produto->img_prod;
                        $imagemData = base64_encode($imagemBlob);
                        echo '<img src="data:image/jpeg;base64,'.$imagemData.'" class="card-img-top">'
                        ?>
                    </a>
                    <div class="card-body">
                        <h5 class="card-title"><?= $produto->nome_prod?></h5>
                        <p class="card-text"><?= $produto->descricao?></p>
                        <p class="card-text">Preço: R$ <?= $produto->preco?></p>
                        <a href="#" class="btn btn-primary">Adicionar ao Carrinho</a>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>

    <!-- Adicione os scripts do Bootstrap no final do seu arquivo HTML -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-eOJMYsdzxR8M1jvIebIl6mGGzZgYcfpQcFg1eGW4fNtX3Qh8eeGnqvq3H2Z2b5H"
        crossorigin="anonymous"></script>
