<div class="container mt-5">
    <div class="row">
        <div class="col-md-6">
            <?php                     
                $imagemBlob = $produto[0]->img_prod;
                $imagemData = base64_encode($imagemBlob);
                echo '<img src="data:image/jpeg;base64,'.$imagemData.'" class="card-img-top" height="700px" width="700px">'
            ?>
        </div>
        <div class="col-md-6 mt-5">
            <h1><?= $produto[0]->nome_prod ?></h1>
            <h5 class="text-muted mt-5"><?= $produto[0]->categoria ?></h5>
            <h5 class="text-muted mt-3"><?= $produto[0]->descricao ?></h5>
            <h4 class="font-weight-bold mt-5">Preço: R$<?= $produto[0]->preco?></h4>
            <div class="form-group mt-4">
                <label for="quantidade">Quantidade:</label>
                <input type="number" class="form-control" id="quantidade" value="1">
            </div>
            <button style="height:50px; width:300px" class="btn btn-primary mt-5 ">Adicionar ao Carrinho</button>
        </div>
    </div>

    <div class="row mt-5 mb-5">
        <div class="col-md-12">
            <h2>Detalhes do Produto</h2>
            <h4><?= $produto[0]->descricao ?></h4>
        </div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>