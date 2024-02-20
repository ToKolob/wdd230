import os
from PIL import Image

# Pasta de entrada (onde estão as imagens JPEG)
pasta_entrada = './'

# Pasta de saída (onde as imagens WebP serão salvas)
pasta_saida = './webp'

# Certifique-se de que a pasta de saída exista
if not os.path.exists(pasta_saida):
    os.makedirs(pasta_saida)

# Percorre todos os arquivos na pasta de entrada
for arquivo in os.listdir(pasta_entrada):
    if arquivo.endswith('.jpg') or arquivo.endswith('.jpeg'):
        # Abre a imagem JPEG
        caminho_arquivo_entrada = os.path.join(pasta_entrada, arquivo)
        imagem_jpeg = Image.open(caminho_arquivo_entrada)

        # Define o nome do arquivo de saída (com a extensão WebP)
        nome_arquivo_saida = os.path.splitext(arquivo)[0] + '.webp'
        caminho_arquivo_saida = os.path.join(pasta_saida, nome_arquivo_saida)

        # Salva a imagem no formato WebP com qualidade reduzida
        imagem_jpeg.save(caminho_arquivo_saida, 'WEBP', quality=80)  # Aqui, 80 é um valor de qualidade arbitrário, você pode ajustar conforme necessário
