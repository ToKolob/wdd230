import os
from PIL import Image

def redimensionar_imagem(imagem_path, largura_nova):
    # Abrir a imagem
    imagem = Image.open(imagem_path)
    
    # Obter as dimensões originais da imagem
    largura_original, altura_original = imagem.size
    
    # Calcular a proporção
    proporcao = largura_nova / float(largura_original)
    altura_nova = int(altura_original * proporcao)
    
    # Redimensionar a imagem com anti-aliasing
    imagem_redimensionada = imagem.resize((largura_nova, altura_nova), Image.LANCZOS)
    
    return imagem_redimensionada

# Pasta de entrada (onde estão as imagens JPEG)
pasta_entrada = './'

# Pasta de saída (onde as imagens WebP serão salvas)
pasta_saida = './webp'

# Largura desejada para a imagem redimensionada
largura_nova = 1500

# Certifique-se de que a pasta de saída exista
if not os.path.exists(pasta_saida):
    os.makedirs(pasta_saida)

# Percorre todos os arquivos na pasta de entrada
for arquivo in os.listdir(pasta_entrada):
    if arquivo.endswith('.jpg') or arquivo.endswith('.jpeg'):
        # Abre a imagem JPEG
        caminho_arquivo_entrada = os.path.join(pasta_entrada, arquivo)
        imagem_jpeg = Image.open(caminho_arquivo_entrada)

        # Redimensiona a imagem mantendo a proporção
        imagem_redimensionada = redimensionar_imagem(caminho_arquivo_entrada, largura_nova)

        # Define o nome do arquivo de saída (com a extensão WebP)
        nome_arquivo_saida = os.path.splitext(arquivo)[0] + '-large' + '.webp'
        caminho_arquivo_saida = os.path.join(pasta_saida, nome_arquivo_saida)

        # Salva a imagem redimensionada no formato WebP com qualidade reduzida
        imagem_redimensionada.save(caminho_arquivo_saida, 'WEBP', quality=80)  # Aqui, 80 é um valor de qualidade arbitrário, você pode ajustar conforme necessário


largura_nova = 1000
for arquivo in os.listdir(pasta_entrada):
    if arquivo.endswith('.jpg') or arquivo.endswith('.jpeg'):
        # Abre a imagem JPEG
        caminho_arquivo_entrada = os.path.join(pasta_entrada, arquivo)
        imagem_jpeg = Image.open(caminho_arquivo_entrada)

        # Redimensiona a imagem mantendo a proporção
        imagem_redimensionada = redimensionar_imagem(caminho_arquivo_entrada, largura_nova)

        # Define o nome do arquivo de saída (com a extensão WebP)
        nome_arquivo_saida = os.path.splitext(arquivo)[0] + '-medium' + '.webp'
        caminho_arquivo_saida = os.path.join(pasta_saida, nome_arquivo_saida)

        # Salva a imagem redimensionada no formato WebP com qualidade reduzida
        imagem_redimensionada.save(caminho_arquivo_saida, 'WEBP', quality=80)  # Aqui, 80 é um valor de qualidade arbitrário, você pode ajustar conforme necessário

largura_nova = 500
for arquivo in os.listdir(pasta_entrada):
    if arquivo.endswith('.jpg') or arquivo.endswith('.jpeg'):
        # Abre a imagem JPEG
        caminho_arquivo_entrada = os.path.join(pasta_entrada, arquivo)
        imagem_jpeg = Image.open(caminho_arquivo_entrada)

        # Redimensiona a imagem mantendo a proporção
        imagem_redimensionada = redimensionar_imagem(caminho_arquivo_entrada, largura_nova)

        # Define o nome do arquivo de saída (com a extensão WebP)
        nome_arquivo_saida = os.path.splitext(arquivo)[0] + '-small' + '.webp'
        caminho_arquivo_saida = os.path.join(pasta_saida, nome_arquivo_saida)

        # Salva a imagem redimensionada no formato WebP com qualidade reduzida
        imagem_redimensionada.save(caminho_arquivo_saida, 'WEBP', quality=80)  # Aqui, 80 é um valor de qualidade arbitrário, você pode ajustar conforme necessário