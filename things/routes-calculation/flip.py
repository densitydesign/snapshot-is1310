import json
import numpy as np


def flip_geojson_coordinates(geo):
    if isinstance(geo, dict):
        for k, v in geo.iteritems():
            if k == "coordinates":
                z = np.asarray(geo[k])
                f = z.flatten()
                geo[k] = np.dstack((f[1::2], f[::2])).reshape(z.shape).tolist()
            else:
                flip_geojson_coordinates(v)
    elif isinstance(geo, list):
        for k in geo:
            flip_geojson_coordinates(k)


with open("routes-selected100.json") as json_file:
    json_data = json.load(json_file)
    flip_geojson_coordinates(json_data)

    with open('routes-selected100.json', 'w') as outfile:
        json.dump(json_data, outfile)