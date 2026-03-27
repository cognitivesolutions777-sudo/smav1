import re
import base64
import os

input_file = r'c:\Users\ChloeKevinJenny\Documents\Cognitive Core\smav1\app\components\NewSMA.jsx'
output_dir = r'c:\Users\ChloeKevinJenny\Documents\Cognitive Core\smav1\public'
output_file = os.path.join(output_dir, 'hero-bg.jpg')

if not os.path.exists(output_dir):
    os.makedirs(output_dir)

with open(input_file, 'r', encoding='utf-8') as f:
    content = f.read()

# Look for the hero section image
start_marker = "background-image:url('data:image/jpeg;base64,"
end_marker = "')"

start_index = content.find(start_marker)
if start_index != -1:
    content_start = start_index + len(start_marker)
    end_index = content.find(end_marker, content_start)
    if end_index != -1:
        base64_data = content[content_start:end_index]
        with open(output_file, 'wb') as f:
            f.write(base64.b64decode(base64_data))
        print(f'Image saved successfully to {output_file}')
    else:
        print('End marker not found')
else:
    print('Start marker not found')
