import { MusclePath, MusclePathGroup } from "../models/interfaces/common.interface";

const musclePaths : MusclePath[] = [
  {
    name: 'main body',
    d: 'M99.0893 204.572L155.589 172.072L154.589 144.072C154.589 144.072 152.916 140.782 152.089 138.572C150.589 130.572 149.589 118.072 149.589 118.072C147.089 118.072 145.562 118.468 143.589 116.381C134.891 107.182 132.892 96.9525 133.589 78.0717C136.589 73.0717 139.089 73.0717 139.089 73.0717L143.589 78.0717C143.589 78.0717 140.02 52.4062 143.589 38.5717C151.089 5.07172 178.589 0.0718794 196.089 0.0716963C244 -1.9281 250 38.5719 250 38.5719C253.57 52.4064 250 78.0719 250 78.0719L254.5 73.0719C254.5 73.0719 257 73.0719 260 78.0719C260.698 96.9526 258.698 107.182 250 116.381C248.027 118.468 246.5 118.072 244 118.072C244 118.072 243 130.572 241.5 138.572C240.674 140.782 239 144.072 239 144.072L238 172.072L294.5 204.572C294.5 204.572 330.245 205.441 348.5 217.072C378 236.072 386.938 271.298 372.5 334.072C375.82 353.403 380.5 353.572 381 383.572C381.5 413.572 378.5 441.572 378.5 441.572C386.113 453.151 394.552 472.119 393.5 498.572C387.871 532.917 373.974 582.994 372.5 641.572C372.5 641.572 381.016 674.913 380.5 693.072C370 708.572 365 712.572 356.5 722.572C344 720.072 339.5 720.572 330 716.072C326.311 711.736 328.263 706.844 324.5 702.572C321.422 699.076 321.5 701.072 316.5 694.572C311.5 688.072 314.939 684.218 316 677.072C325.5 661.072 333 641.572 333 641.572C337.017 621.374 338.373 609.047 339 585.072C329.305 557.017 324.809 541.617 318 514.572C313.518 488.256 315.366 473.356 325 446.572C316.242 418.664 313.296 394.692 310 365.572C303.498 390.335 299.264 404.891 287.5 428.072C291.367 451.458 291.893 465.145 288.5 491.072C297.164 500.416 298.83 517.914 299.5 557.072C322 615.072 311.5 777.072 277.5 835.572C279.319 857.591 275.684 867.454 273 887.072C277.5 896.072 287 919.072 287 984.072C281.685 1034.57 251.5 1122.07 248.5 1165.57C246.112 1166.62 262 1191.07 278 1205.07C298.014 1207.2 297.63 1212.23 298.696 1218C299.009 1219.7 298.108 1221.5 296.418 1221.84C279.203 1225.33 237 1223.57 237 1223.57C237 1223.57 221 1221.07 202.5 1219.07C200.793 1206.5 208.733 1199.08 209 1187.07C209.117 1181.82 205.663 1179.33 205.5 1174.07C205.273 1166.73 211 1156.07 211 1156.07C220 1066.57 205.5 1025.07 199 980.572C198.957 945.584 202.598 928.928 212 901.572C206.332 870.803 206.992 855.479 214 831.072C203.136 764.155 200.513 725.131 201.5 653.072H192.089C193.077 725.131 190.454 764.155 179.589 831.072C186.597 855.479 187.257 870.803 181.589 901.572C190.992 928.928 194.633 945.584 194.589 980.572C188.089 1025.07 173.589 1066.57 182.589 1156.07C182.589 1156.07 188.316 1166.72 188.089 1174.07C187.927 1179.33 184.472 1181.82 184.589 1187.07C184.857 1199.08 192.797 1206.5 191.089 1219.07C172.589 1221.07 156.589 1223.57 156.589 1223.57C156.589 1223.57 114.387 1225.33 97.1716 1221.84C95.4812 1221.5 94.5804 1219.7 94.8937 1218C95.9594 1212.23 95.5756 1207.2 115.589 1205.07C131.589 1191.07 147.478 1166.62 145.089 1165.57C142.089 1122.07 111.905 1034.57 106.589 984.072C106.589 919.072 116.089 896.072 120.589 887.072C117.906 867.454 114.271 857.591 116.089 835.572C82.0893 777.072 71.5893 615.072 94.0893 557.072C94.7592 517.914 96.4261 500.416 105.089 491.072C101.697 465.145 102.223 451.458 106.089 428.072C94.3257 404.891 90.0913 390.335 83.5893 365.572C80.2936 394.692 77.3471 418.664 68.5893 446.572C78.2241 473.356 80.0715 488.256 75.5893 514.572C68.7802 541.617 64.2844 557.017 54.5893 585.072C55.2171 609.047 56.573 621.374 60.5893 641.572C60.5893 641.572 68.0894 661.072 77.5893 677.072C78.6508 684.218 82.0893 688.072 77.0893 694.572C72.0894 701.072 72.1675 699.076 69.0893 702.572C65.327 706.844 67.2782 711.736 63.5893 716.072C54.0893 720.572 49.5893 720.072 37.0893 722.572C28.5893 712.572 23.5893 708.572 13.0893 693.072C12.5732 674.913 21.0893 641.572 21.0893 641.572C19.6158 582.994 5.71889 532.917 0.0892717 498.572C-0.962598 472.119 7.47663 453.151 15.0893 441.572C15.0893 441.572 12.0893 413.572 12.5893 383.572C13.0893 353.572 17.7698 353.403 21.0893 334.072C6.65193 271.298 15.5893 236.072 45.0893 217.072C63.3448 205.441 99.0893 204.572 99.0893 204.572Z'
  },
];