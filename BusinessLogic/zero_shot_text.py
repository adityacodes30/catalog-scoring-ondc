# -*- coding: utf-8 -*-
"""Zero_shot_text.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/19BhwNrrDr89YIYfccGOCQuL-OVWp7-xV
"""

#!pip install transformers -U

import numpy as np
import tensorflow as tf
from transformers import pipeline
from transformers import AutoTokenizer, AutoModelForSequenceClassification

def zero_shot_text(text, labels):
  classifier = pipeline("zero-shot-classification", model='cross-encoder/nli-deberta-v3-small')
  sent = text
  candidate_labels = labels
  res = classifier(sent, candidate_labels)
  print(res)
  return res

# text = ['LOREAL PROFESSIONNEL PARIS Absolut Repair Shampoo For Damaged & Weakend Hair, 300ML |Professional Hair Repairing Shampoo|Hair Strengthening Shampoo',
#         'Khadi Natural Amla & Bhringraj Shampoo/Cleanser for Controlling Dandruff & Hair fall | Shampoo for Reducing Scalp Irritation | Paraben & Sulphate-Free | Suitable for All Hair Types, 210ml']
# labels = ["technology", "sports", "politics", "shampoo", "hair", "hair_care", "conditioner"]
# result = zero_shot_text(text, labels)

# text = ['raaga professional pro botanix anti dandruff shampoo, with ttea tree oit, 1000 ml']
# labels = ["technology", "sports", "politics", "hair", "hair_care", "conditioner", "tea"]
# zero_shot_text(text, labels)

# !pip install git+https://github.com/PrithivirajDamodaran/ZSIC.git
# from ZSIC import ZeroShotImageClassification

# zsic = ZeroShotImageClassification()


# #Predictions
# preds = zsic(image="http://images.cocodataset.org/val2017/000000039769.jpg",
#             candidate_labels=["birds", "lions", "cats","dogs"],
#             )
# print(preds)

# #Predictions
# preds = zsic(image="https://imgcdn.shortlyst.com/ondc?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0661%2F9732%2F4035%2Fproducts%2FSoulflower-Coffee-Soap.jpg%3Fv%3D1685470435",
#             candidate_labels=["birds", "lions", "cats","dogs", "sauce", "soap"],
#             )
# print(preds)

# import requests
# from PIL import Image

# url = 'https://media.newyorker.com/cartoons/63dc6847be24a6a76d90eb99/master/w_1160,c_limit/230213_a26611_838.jpg'
# image = Image.open(requests.get(url, stream=True).raw).convert('RGB')
# display(image.resize((596, 437)))

# text = 'Apple just announced the newest iPhone X'
# labels = ["technology", "sports", "politics"]
# classifier = pipeline("zero-shot-classification", model='cross-encoder/nli-deberta-v3-small')

# sent = text
# candidate_labels = labels
# res = classifier(sent, candidate_labels)
# print(res)

# pipe = pipeline(
#     task='zero-shot-classification',
#     model='ilos-vigil/bigbird-small-indonesian-nli'
#     )
# pipe(
#     sequences='This is the latest Iphone 12',
#     candidate_labels=['phone', 'computer', 'iphone', 'banana'],
#     hypothesis_template='Kategori berita ini adalah {}.',
#     multi_label=True
# )

# pipe = pipeline(
#     task='text-classification',
#     model='ilos-vigil/bigbird-small-indonesian-nli',
#     return_all_scores=True
# )

# # pipe = pipeline(
# #     task='zero-shot-classification',
# #     model='ilos-vigil/bigbird-small-indonesian-nli'
# # )
# pipe({
#     'text': 'This is new and sexy Iphone 12',
#     'text_pair': 'Bananas are great!'
# })