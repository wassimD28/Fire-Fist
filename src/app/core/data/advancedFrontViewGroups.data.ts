import { MusclePathGroup } from "../models/interfaces/common.interface";

const simpleFrontViewGroups : MusclePathGroup[] = [
  {
    groupName : "lower abdominal",
    musclePaths: [
      {
        name: "lower abdominal",
        side: "left",
        partOf: "abdominal",
        d: "M172.1 468.406L158.97 472.01C153.503 473.511 147.63 471.024 145.388 465.816C140.728 454.991 138.349 443.869 140.514 426.621C141.061 422.267 144.17 418.668 148.387 417.456C159.886 414.149 168.11 413.538 178.896 415.049C182.791 415.595 186.156 418.196 187.34 421.946C190.116 430.743 189.454 437.951 187.203 448.735C186.812 450.609 186.002 452.403 184.61 453.718C184.548 453.777 184.485 453.835 184.422 453.893C182.386 455.772 180.841 458.096 179.852 460.683C179.131 462.569 178.303 463.97 177.204 465.316C175.918 466.892 174.062 467.868 172.1 468.406Z"
      },
      {
        name: "lower abdominal",
        side: "right",
        partOf: "abdominal",
        d: "M222.507 468.406L235.637 472.01C241.104 473.511 246.977 471.024 249.219 465.816C253.879 454.991 256.258 443.869 254.093 426.621C253.546 422.267 250.437 418.668 246.22 417.456C234.721 414.149 226.497 413.538 215.711 415.049C211.816 415.595 208.451 418.196 207.267 421.946C204.491 430.743 205.153 437.951 207.404 448.735C207.795 450.609 208.605 452.403 209.997 453.718C210.059 453.777 210.122 453.835 210.185 453.893C212.221 455.772 213.766 458.096 214.755 460.683C215.476 462.569 216.304 463.97 217.403 465.316C218.689 466.892 220.545 467.868 222.507 468.406Z"
      },
      {
        name:"lower abdominal",
        side:"left",
        partOf: "abdominal",
        d:"M180.839 475.586C173.711 474.032 165.964 475.811 154.683 482.24C150.229 484.778 147.814 489.782 148.347 494.881C152.793 537.365 164.871 566.654 176.213 578.339C179.666 581.897 185.289 581.246 187.144 576.648C193.969 559.73 189.473 519.205 188.699 486.917C188.576 481.78 185.859 476.681 180.839 475.586Z"
      },
      {
        name: "lower abdominal",
        side: "right",
        partOf: "abdominal",
        d: "M213.768 475.586C220.896 474.032 228.643 475.811 239.924 482.24C244.378 484.778 246.793 489.782 246.26 494.881C241.814 537.365 229.736 566.654 218.394 578.339C214.941 581.897 209.318 581.246 207.463 576.648C200.638 559.73 205.134 519.205 205.908 486.917C206.031 481.78 208.748 476.681 213.768 475.586Z"
      }
    ]
  },
  {
    groupName: "upper abdominal",
    musclePaths:[
      {
        name: "upper abdominal",
        side: "left",
        partOf: "abdominal",
        d: "M180.954 408.421C169.309 409.644 159 408.835 147.434 410.774C142.122 411.665 136.712 408.427 136.285 403.058C135.598 394.404 136.009 384.841 139.113 377.994C139.695 376.709 140.695 375.668 141.923 374.973C152.384 369.049 168.48 366.758 182.281 368.709C185.302 369.136 187.79 371.304 188.379 374.297C189.909 382.074 189.499 392.241 188.146 401.482C187.605 405.173 184.663 408.031 180.954 408.421Z"
      },
      {
        name: "upper abdominal",
        side: "right",
        partOf: "abdominal",
        d: "M213.653 408.421C225.298 409.644 235.607 408.835 247.173 410.774C252.485 411.665 257.895 408.427 258.322 403.058C259.009 394.404 258.598 384.841 255.494 377.994C254.912 376.709 253.912 375.668 252.684 374.973C242.223 369.049 226.127 366.758 212.326 368.709C209.305 369.136 206.817 371.304 206.228 374.297C204.698 382.074 205.108 392.241 206.461 401.482C207.002 405.173 209.944 408.031 213.653 408.421Z"
      },
      {
        name: "upper abdominal",
        side: "left",
        partOf: "abdominal",
        d: "M181.796 362.723C168.952 361.917 158.466 363.877 146.013 368.666C142.779 369.909 139.001 368.314 138.664 364.866C138.096 359.047 139.76 353.439 143.31 347.084C143.495 346.752 143.71 346.442 143.966 346.162C152.343 337.019 175.35 331.554 184.995 333.335C185.73 333.471 186.415 333.798 186.945 334.325C191.439 338.799 191.403 348.932 187.724 359.097C186.848 361.519 184.366 362.884 181.796 362.723Z"
      },
      {
        name: "upper abdominal",
        side: "right",
        partOf: "abdominal",
        d: "M212.811 362.723C225.655 361.917 236.141 363.877 248.594 368.666C251.828 369.909 255.606 368.314 255.943 364.866C256.511 359.047 254.847 353.439 251.297 347.084C251.112 346.752 250.897 346.442 250.641 346.162C242.264 337.019 219.257 331.554 209.612 333.335C208.877 333.471 208.192 333.798 207.662 334.325C203.168 338.799 203.204 348.932 206.883 359.097C207.759 361.519 210.241 362.884 212.811 362.723Z"
      }
    ]
  }
]


