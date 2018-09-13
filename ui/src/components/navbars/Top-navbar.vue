<template>
    <!--Модуль верхнего навбара -->
    <div class="row">
        <div class="col col-lg-12">
            <!--Верхний навбар-->
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary-new">
                <div class="header-col-fill" v-bind:class="{'header-col-min' : !showheder}">
                    <i class="mdi mdi-auto-fix fa-2x ml-2" style="color: white"></i>
                    <a v-show="showheder" class="navbar-brand ml-2" href="#">СЭДО</a>
                </div>
                <ul class="navbar-nav mr-auto mt-md-0">
                    <!-- This is  -->
                    <li class="nav-item">
                        <a class="nav-link nav-toggler hidden-md-up  waves-effect waves-dark">
                            <i class="mdi mdi-menu"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link sidebartoggler hidden-sm-down waves-effect waves-dark">
                            <i class="ti-menu" @click="show"></i>
                        </a>
                    </li>
                    <!-- ============================================================== -->
                    <!-- Search -->
                    <!-- ============================================================== -->
                    <li class="nav-item hidden-sm-down search-box">
                        <a class="nav-link hidden-sm-down waves-effect waves-dark" @click="search">
                            <i class="ti-search"></i>
                        </a>
                        <form class="app-search" v-bind:style="style">
                            <input type="text" class="form-control" placeholder="Введите запрос и нажмите  &amp; enter">
                            <a class="srh-btn">
                                <i class="ti-close" @click="search"></i>
                            </a>
                        </form>
                    </li>
                </ul>
                <div class="right-aside dropdown" v-bind:class="{'show' : showuser}">
                    <button class="btn btn-outline-light mr-1 my-2 my-sm-0 btn-header" type="submit">
                        <i class="fas fa-exclamation fa-lg"></i>
                    </button>
                    <button @click="calendar" class="btn btn-outline-light mr-1 my-2 my-sm-0 btn-header" type="submit">
                        <i class="fas fa-calendar-minus fa-lg"></i>
                        <div class="notify">
                            <span class="point"></span>
                        </div>
                        <div v-if="vision" class="daterangepicker ltr single auto-apply opensright show-calendar">
                            <div class="ranges"></div>
                            <div class="calendar left single" style="display: block;">
                                <div class="calendar-table">
                                    <table class="table-condensed">
                                        <thead>
                                        <tr>
                                            <th class="prev available"><span></span></th>
                                            <th colspan="5" class="month"><select class="monthselect">
                                                <option value="0">Янв</option>
                                                <option value="1">Фев</option>
                                                <option value="2">Мар</option>
                                                <option value="3">Апр</option>
                                                <option value="4">Май</option>
                                                <option value="5">Июн</option>
                                                <option value="6">Июл</option>
                                                <option value="7" selected="selected">Авг</option>
                                                <option value="8">Сен</option>
                                                <option value="9">Окт</option>
                                                <option value="10">Ноя</option>
                                                <option value="11">Дек</option>
                                            </select><select class="yearselect">
                                                <option value="1918">1918</option>
                                                <option value="1919">1919</option>
                                                <option value="1920">1920</option>
                                                <option value="1921">1921</option>
                                                <option value="1922">1922</option>
                                                <option value="1923">1923</option>
                                                <option value="1924">1924</option>
                                                <option value="1925">1925</option>
                                                <option value="1926">1926</option>
                                                <option value="1927">1927</option>
                                                <option value="1928">1928</option>
                                                <option value="1929">1929</option>
                                                <option value="1930">1930</option>
                                                <option value="1931">1931</option>
                                                <option value="1932">1932</option>
                                                <option value="1933">1933</option>
                                                <option value="1934">1934</option>
                                                <option value="1935">1935</option>
                                                <option value="1936">1936</option>
                                                <option value="1937">1937</option>
                                                <option value="1938">1938</option>
                                                <option value="1939">1939</option>
                                                <option value="1940">1940</option>
                                                <option value="1941">1941</option>
                                                <option value="1942">1942</option>
                                                <option value="1943">1943</option>
                                                <option value="1944">1944</option>
                                                <option value="1945">1945</option>
                                                <option value="1946">1946</option>
                                                <option value="1947">1947</option>
                                                <option value="1948">1948</option>
                                                <option value="1949">1949</option>
                                                <option value="1950">1950</option>
                                                <option value="1951">1951</option>
                                                <option value="1952">1952</option>
                                                <option value="1953">1953</option>
                                                <option value="1954">1954</option>
                                                <option value="1955">1955</option>
                                                <option value="1956">1956</option>
                                                <option value="1957">1957</option>
                                                <option value="1958">1958</option>
                                                <option value="1959">1959</option>
                                                <option value="1960">1960</option>
                                                <option value="1961">1961</option>
                                                <option value="1962">1962</option>
                                                <option value="1963">1963</option>
                                                <option value="1964">1964</option>
                                                <option value="1965">1965</option>
                                                <option value="1966">1966</option>
                                                <option value="1967">1967</option>
                                                <option value="1968">1968</option>
                                                <option value="1969">1969</option>
                                                <option value="1970">1970</option>
                                                <option value="1971">1971</option>
                                                <option value="1972">1972</option>
                                                <option value="1973">1973</option>
                                                <option value="1974">1974</option>
                                                <option value="1975">1975</option>
                                                <option value="1976">1976</option>
                                                <option value="1977">1977</option>
                                                <option value="1978">1978</option>
                                                <option value="1979">1979</option>
                                                <option value="1980">1980</option>
                                                <option value="1981">1981</option>
                                                <option value="1982">1982</option>
                                                <option value="1983">1983</option>
                                                <option value="1984">1984</option>
                                                <option value="1985">1985</option>
                                                <option value="1986">1986</option>
                                                <option value="1987">1987</option>
                                                <option value="1988">1988</option>
                                                <option value="1989">1989</option>
                                                <option value="1990">1990</option>
                                                <option value="1991">1991</option>
                                                <option value="1992">1992</option>
                                                <option value="1993">1993</option>
                                                <option value="1994">1994</option>
                                                <option value="1995">1995</option>
                                                <option value="1996">1996</option>
                                                <option value="1997">1997</option>
                                                <option value="1998">1998</option>
                                                <option value="1999">1999</option>
                                                <option value="2000">2000</option>
                                                <option value="2001">2001</option>
                                                <option value="2002">2002</option>
                                                <option value="2003">2003</option>
                                                <option value="2004">2004</option>
                                                <option value="2005">2005</option>
                                                <option value="2006">2006</option>
                                                <option value="2007">2007</option>
                                                <option value="2008">2008</option>
                                                <option value="2009">2009</option>
                                                <option value="2010">2010</option>
                                                <option value="2011">2011</option>
                                                <option value="2012">2012</option>
                                                <option value="2013">2013</option>
                                                <option value="2014">2014</option>
                                                <option value="2015">2015</option>
                                                <option value="2016">2016</option>
                                                <option value="2017">2017</option>
                                                <option value="2018" selected="selected">2018</option>
                                                <option value="2019">2019</option>
                                                <option value="2020">2020</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                                <option value="2029">2029</option>
                                                <option value="2030">2030</option>
                                                <option value="2031">2031</option>
                                                <option value="2032">2032</option>
                                                <option value="2033">2033</option>
                                                <option value="2034">2034</option>
                                                <option value="2035">2035</option>
                                                <option value="2036">2036</option>
                                                <option value="2037">2037</option>
                                                <option value="2038">2038</option>
                                                <option value="2039">2039</option>
                                                <option value="2040">2040</option>
                                                <option value="2041">2041</option>
                                                <option value="2042">2042</option>
                                                <option value="2043">2043</option>
                                                <option value="2044">2044</option>
                                                <option value="2045">2045</option>
                                                <option value="2046">2046</option>
                                                <option value="2047">2047</option>
                                                <option value="2048">2048</option>
                                                <option value="2049">2049</option>
                                                <option value="2050">2050</option>
                                                <option value="2051">2051</option>
                                                <option value="2052">2052</option>
                                                <option value="2053">2053</option>
                                                <option value="2054">2054</option>
                                                <option value="2055">2055</option>
                                                <option value="2056">2056</option>
                                                <option value="2057">2057</option>
                                                <option value="2058">2058</option>
                                                <option value="2059">2059</option>
                                                <option value="2060">2060</option>
                                                <option value="2061">2061</option>
                                                <option value="2062">2062</option>
                                                <option value="2063">2063</option>
                                                <option value="2064">2064</option>
                                                <option value="2065">2065</option>
                                                <option value="2066">2066</option>
                                                <option value="2067">2067</option>
                                                <option value="2068">2068</option>
                                                <option value="2069">2069</option>
                                                <option value="2070">2070</option>
                                                <option value="2071">2071</option>
                                                <option value="2072">2072</option>
                                                <option value="2073">2073</option>
                                                <option value="2074">2074</option>
                                                <option value="2075">2075</option>
                                                <option value="2076">2076</option>
                                                <option value="2077">2077</option>
                                                <option value="2078">2078</option>
                                                <option value="2079">2079</option>
                                                <option value="2080">2080</option>
                                                <option value="2081">2081</option>
                                                <option value="2082">2082</option>
                                                <option value="2083">2083</option>
                                                <option value="2084">2084</option>
                                                <option value="2085">2085</option>
                                                <option value="2086">2086</option>
                                                <option value="2087">2087</option>
                                                <option value="2088">2088</option>
                                                <option value="2089">2089</option>
                                                <option value="2090">2090</option>
                                                <option value="2091">2091</option>
                                                <option value="2092">2092</option>
                                                <option value="2093">2093</option>
                                                <option value="2094">2094</option>
                                                <option value="2095">2095</option>
                                                <option value="2096">2096</option>
                                                <option value="2097">2097</option>
                                                <option value="2098">2098</option>
                                                <option value="2099">2099</option>
                                                <option value="2100">2100</option>
                                                <option value="2101">2101</option>
                                                <option value="2102">2102</option>
                                                <option value="2103">2103</option>
                                                <option value="2104">2104</option>
                                                <option value="2105">2105</option>
                                                <option value="2106">2106</option>
                                                <option value="2107">2107</option>
                                                <option value="2108">2108</option>
                                                <option value="2109">2109</option>
                                                <option value="2110">2110</option>
                                                <option value="2111">2111</option>
                                                <option value="2112">2112</option>
                                                <option value="2113">2113</option>
                                                <option value="2114">2114</option>
                                                <option value="2115">2115</option>
                                                <option value="2116">2116</option>
                                                <option value="2117">2117</option>
                                                <option value="2118">2118</option>
                                            </select></th>
                                            <th class="next available"><span></span></th>
                                        </tr>
                                        <tr>
                                            <th>Вс </th>
                                            <th>Пн </th>
                                            <th>Вт </th>
                                            <th>Ср </th>
                                            <th>Чт </th>
                                            <th>Пт </th>
                                            <th>Сб </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td class="weekend off available" data-title="r0c0">29</td>
                                            <td class="off available" data-title="r0c1">30</td>
                                            <td class="off available" data-title="r0c2">31</td>
                                            <td class="available" data-title="r0c3">1</td>
                                            <td class="active start-date active end-date available" data-title="r0c4">
                                                2
                                            </td>
                                            <td class="available" data-title="r0c5">3</td>
                                            <td class="weekend available" data-title="r0c6">4</td>
                                        </tr>
                                        <tr>
                                            <td class="weekend available" data-title="r1c0">5</td>
                                            <td class="available" data-title="r1c1">6</td>
                                            <td class="available" data-title="r1c2">7</td>
                                            <td class="available" data-title="r1c3">8</td>
                                            <td class="available" data-title="r1c4">9</td>
                                            <td class="available" data-title="r1c5">10</td>
                                            <td class="weekend available" data-title="r1c6">11</td>
                                        </tr>
                                        <tr>
                                            <td class="weekend available" data-title="r2c0">12</td>
                                            <td class="available" data-title="r2c1">13</td>
                                            <td class="available" data-title="r2c2">14</td>
                                            <td class="available" data-title="r2c3">15</td>
                                            <td class="available" data-title="r2c4">16</td>
                                            <td class="available" data-title="r2c5">17</td>
                                            <td class="weekend available" data-title="r2c6">18</td>
                                        </tr>
                                        <tr>
                                            <td class="weekend available" data-title="r3c0">19</td>
                                            <td class="available" data-title="r3c1">20</td>
                                            <td class="available" data-title="r3c2">21</td>
                                            <td class="available" data-title="r3c3">22</td>
                                            <td class="available" data-title="r3c4">23</td>
                                            <td class="available" data-title="r3c5">24</td>
                                            <td class="weekend available" data-title="r3c6">25</td>
                                        </tr>
                                        <tr>
                                            <td class="weekend available" data-title="r4c0">26</td>
                                            <td class="available" data-title="r4c1">27</td>
                                            <td class="available" data-title="r4c2">28</td>
                                            <td class="available" data-title="r4c3">29</td>
                                            <td class="today available" data-title="r4c4">30</td>
                                            <td class="available" data-title="r4c5">31</td>
                                            <td class="weekend off available" data-title="r4c6">1</td>
                                        </tr>
                                        <tr>
                                            <td class="weekend off available" data-title="r5c0">2</td>
                                            <td class="off available" data-title="r5c1">3</td>
                                            <td class="off available" data-title="r5c2">4</td>
                                            <td class="off available" data-title="r5c3">5</td>
                                            <td class="off available" data-title="r5c4">6</td>
                                            <td class="off available" data-title="r5c5">7</td>
                                            <td class="weekend off available" data-title="r5c6">8</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="calendar-time" style="display: none;"></div>
                            </div>
                            <div class="calendar right" style="display: none;">
                                <div class="calendar-table">
                                    <table class="table-condensed">
                                        <thead>
                                        <tr>
                                            <th></th>
                                            <th colspan="5" class="month"><select class="monthselect">
                                                <option value="0" disabled="disabled">Jan</option>
                                                <option value="1" disabled="disabled">Feb</option>
                                                <option value="2" disabled="disabled">Mar</option>
                                                <option value="3" disabled="disabled">Apr</option>
                                                <option value="4" disabled="disabled">May</option>
                                                <option value="5" disabled="disabled">Jun</option>
                                                <option value="6" disabled="disabled">Jul</option>
                                                <option value="7">Aug</option>
                                                <option value="8" selected="selected">Sep</option>
                                                <option value="9">Oct</option>
                                                <option value="10">Nov</option>
                                                <option value="11">Dec</option>
                                            </select><select class="yearselect">
                                                <option value="2018" selected="selected">2018</option>
                                                <option value="2019">2019</option>
                                                <option value="2020">2020</option>
                                                <option value="2021">2021</option>
                                                <option value="2022">2022</option>
                                                <option value="2023">2023</option>
                                                <option value="2024">2024</option>
                                                <option value="2025">2025</option>
                                                <option value="2026">2026</option>
                                                <option value="2027">2027</option>
                                                <option value="2028">2028</option>
                                                <option value="2029">2029</option>
                                                <option value="2030">2030</option>
                                                <option value="2031">2031</option>
                                                <option value="2032">2032</option>
                                                <option value="2033">2033</option>
                                                <option value="2034">2034</option>
                                                <option value="2035">2035</option>
                                                <option value="2036">2036</option>
                                                <option value="2037">2037</option>
                                                <option value="2038">2038</option>
                                                <option value="2039">2039</option>
                                                <option value="2040">2040</option>
                                                <option value="2041">2041</option>
                                                <option value="2042">2042</option>
                                                <option value="2043">2043</option>
                                                <option value="2044">2044</option>
                                                <option value="2045">2045</option>
                                                <option value="2046">2046</option>
                                                <option value="2047">2047</option>
                                                <option value="2048">2048</option>
                                                <option value="2049">2049</option>
                                                <option value="2050">2050</option>
                                                <option value="2051">2051</option>
                                                <option value="2052">2052</option>
                                                <option value="2053">2053</option>
                                                <option value="2054">2054</option>
                                                <option value="2055">2055</option>
                                                <option value="2056">2056</option>
                                                <option value="2057">2057</option>
                                                <option value="2058">2058</option>
                                                <option value="2059">2059</option>
                                                <option value="2060">2060</option>
                                                <option value="2061">2061</option>
                                                <option value="2062">2062</option>
                                                <option value="2063">2063</option>
                                                <option value="2064">2064</option>
                                                <option value="2065">2065</option>
                                                <option value="2066">2066</option>
                                                <option value="2067">2067</option>
                                                <option value="2068">2068</option>
                                                <option value="2069">2069</option>
                                                <option value="2070">2070</option>
                                                <option value="2071">2071</option>
                                                <option value="2072">2072</option>
                                                <option value="2073">2073</option>
                                                <option value="2074">2074</option>
                                                <option value="2075">2075</option>
                                                <option value="2076">2076</option>
                                                <option value="2077">2077</option>
                                                <option value="2078">2078</option>
                                                <option value="2079">2079</option>
                                                <option value="2080">2080</option>
                                                <option value="2081">2081</option>
                                                <option value="2082">2082</option>
                                                <option value="2083">2083</option>
                                                <option value="2084">2084</option>
                                                <option value="2085">2085</option>
                                                <option value="2086">2086</option>
                                                <option value="2087">2087</option>
                                                <option value="2088">2088</option>
                                                <option value="2089">2089</option>
                                                <option value="2090">2090</option>
                                                <option value="2091">2091</option>
                                                <option value="2092">2092</option>
                                                <option value="2093">2093</option>
                                                <option value="2094">2094</option>
                                                <option value="2095">2095</option>
                                                <option value="2096">2096</option>
                                                <option value="2097">2097</option>
                                                <option value="2098">2098</option>
                                                <option value="2099">2099</option>
                                                <option value="2100">2100</option>
                                                <option value="2101">2101</option>
                                                <option value="2102">2102</option>
                                                <option value="2103">2103</option>
                                                <option value="2104">2104</option>
                                                <option value="2105">2105</option>
                                                <option value="2106">2106</option>
                                                <option value="2107">2107</option>
                                                <option value="2108">2108</option>
                                                <option value="2109">2109</option>
                                                <option value="2110">2110</option>
                                                <option value="2111">2111</option>
                                                <option value="2112">2112</option>
                                                <option value="2113">2113</option>
                                                <option value="2114">2114</option>
                                                <option value="2115">2115</option>
                                                <option value="2116">2116</option>
                                                <option value="2117">2117</option>
                                                <option value="2118">2118</option>
                                            </select></th>
                                            <th class="next available"><span></span></th>
                                        </tr>
                                        <tr>
                                            <th>Вс</th>
                                            <th>Пн</th>
                                            <th>Вт</th>
                                            <th>Ср</th>
                                            <th>Чт</th>
                                            <th>Пт</th>
                                            <th>Сб</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td class="weekend off available" data-title="r0c0">26</td>
                                            <td class="off available" data-title="r0c1">27</td>
                                            <td class="off available" data-title="r0c2">28</td>
                                            <td class="off available" data-title="r0c3">29</td>
                                            <td class="today off available" data-title="r0c4">30</td>
                                            <td class="off available" data-title="r0c5">31</td>
                                            <td class="weekend available" data-title="r0c6">1</td>
                                        </tr>
                                        <tr>
                                            <td class="weekend available" data-title="r1c0">2</td>
                                            <td class="available" data-title="r1c1">3</td>
                                            <td class="available" data-title="r1c2">4</td>
                                            <td class="available" data-title="r1c3">5</td>
                                            <td class="available" data-title="r1c4">6</td>
                                            <td class="available" data-title="r1c5">7</td>
                                            <td class="weekend available" data-title="r1c6">8</td>
                                        </tr>
                                        <tr>
                                            <td class="weekend available" data-title="r2c0">9</td>
                                            <td class="available" data-title="r2c1">10</td>
                                            <td class="available" data-title="r2c2">11</td>
                                            <td class="available" data-title="r2c3">12</td>
                                            <td class="available" data-title="r2c4">13</td>
                                            <td class="available" data-title="r2c5">14</td>
                                            <td class="weekend available" data-title="r2c6">15</td>
                                        </tr>
                                        <tr>
                                            <td class="weekend available" data-title="r3c0">16</td>
                                            <td class="available" data-title="r3c1">17</td>
                                            <td class="available" data-title="r3c2">18</td>
                                            <td class="available" data-title="r3c3">19</td>
                                            <td class="available" data-title="r3c4">20</td>
                                            <td class="available" data-title="r3c5">21</td>
                                            <td class="weekend available" data-title="r3c6">22</td>
                                        </tr>
                                        <tr>
                                            <td class="weekend available" data-title="r4c0">23</td>
                                            <td class="available" data-title="r4c1">24</td>
                                            <td class="available" data-title="r4c2">25</td>
                                            <td class="available" data-title="r4c3">26</td>
                                            <td class="available" data-title="r4c4">27</td>
                                            <td class="available" data-title="r4c5">28</td>
                                            <td class="weekend available" data-title="r4c6">29</td>
                                        </tr>
                                        <tr>
                                            <td class="weekend available" data-title="r5c0">30</td>
                                            <td class="off available" data-title="r5c1">1</td>
                                            <td class="off available" data-title="r5c2">2</td>
                                            <td class="off available" data-title="r5c3">3</td>
                                            <td class="off available" data-title="r5c4">4</td>
                                            <td class="off available" data-title="r5c5">5</td>
                                            <td class="weekend off available" data-title="r5c6">6</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="calendar-time" style="display: none;"></div>
                            </div>
                            <div class="drp-buttons"></div>
                        </div>
                    </button>
                    <button @click="logoutusr" class="btn btn-outline-light mr-1 my-2 my-sm-0 btn-header " type="submit"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <i class="fas fa-user fa-lg"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right scale-up" >
                        <ul class="dropdown-user">
                            <li>
                                <div class="dw-user-box row ml-2">
                                    <div class="u-img mr-3 ml-3"><img src="../../assets/images/users/1.jpg" alt="user"></div>
                                    <div class="u-text mt-3">
                                        <h4><p>Егоров Михаил</p><p> Александрович</p></h4>
                                    </div>
                                    <p class="ml-3 text-muted">varun@gmail.com</p>
                                </div>
                            </li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#"><i class="ti-user ml-2"></i> Мой профиль</a></li>
                            <li><a href="#"><i class="ti-wallet ml-2"></i> Мои задания</a></li>
                            <li><a href="#"><i class="ti-email ml-2"></i> Сообщения</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#"><i class="ti-settings ml-2"></i> Настройки</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#" @click="logoutusr"><i class="fa fa-power-off ml-2"></i> Выход</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
  const axios = require('axios')
  export default {
    name: 'top-navbar',
    data () {
      return {
        style: 'display: none',
        vision: false,
        showuser: false
      }
    },
    methods: {
      search () {
        this.style === 'display: block' ? this.style = 'display: none' : this.style = 'display: block'
      },
      show () {
        this.$store.commit('usertop')
      },
      calendar () {
        this.vision = !this.vision
      },
      logoutusr () {
        this.showuser = !this.showuser
        let url = 'http://localhost:8080/token/invalidate'
        axios(url, {
          method: 'GET',
          mode: 'no-cors',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
//        withCredentials: true,
          credentials: 'same-origin'
        })
          .then(resp => {
            console.log(resp)
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    computed: {
      showheder () {
        return this.$store.getters.readStatus
      }
    }
  }
</script>

<style scoped>
    @import '../../assets/css/style.css';
    @import url("https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700");

    body {
        background-color: #eef5f9;
        font-family: "Poppins", sans-serif;
    }

    .bg-primary-new {
        background-color: #1e88e5;
    }

    hr {
        border: none;
        background-color: #2a3035;
        color: #2a3035;
        height: 1px;
    }

    .collapse-list ul li {
        color: #455a64;
        list-style-type: none;
        margin-left: -30px;
    }

    .toggle-btn ul li {
        list-style-type: none;
        margin-left: -30px;
    }

    .toggle-btn-line ul li {
        display: inline;
        list-style-type: none;
    }

    .btn-header {
        border: 0;
    }

    .right-aside {

        padding: 0;
    }

    .nav-link {
        border-radius: 30px;
        width: 35px;
        height: 35px;
    }

    .header-col-fill {
        max-width: 10%;
        flex: 10%;
    }

    .navbar {
        padding-left: 0;
    }

    .navbar-brand {
        font-size: 1.6rem;
    }

    .header-col-min {
        max-width: 3%;
        flex: 3%;
    }

    .notify {
        top: -15px;
        right: -10px;
    }
    .daterangepicker{
        background-color: white;
        right: 100px;
        display: block;
        position: absolute;
        z-index: 1000;
        top: 70px;
        color:#67757c;
        border: 1px solid rgba(120, 130, 140, 0.13);
        padding:  10px;
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
        -webkit-box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
    }
    .active{
        border-radius: 50px;
        color: white;
    }
    .dropdown-menu{
        font-size: 1.2rem;
        width: 270px;
        padding-bottom: 0;
    }
    .u-img {
        display: inline-block;
        vertical-align: top;
    }
    .u-img img{
        width: 80px;
        border-radius: 10px;
    }
    ul {
       padding-left: 0;
        margin-bottom: 0;
    }
    .dropdown-user li a {
        text-decoration: none;
        padding: 9px 15px;
        display: block;
        color: #67757c;
    }
    .dropdown-user li {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .dropdown-user li:hover {
       background-color: #eef5f9;
    }
    .divider{
        height: 1px;
        margin: 9px 0;
        overflow: hidden;
        background-color: rgba(120, 130, 140, 0.13);
    }
    .u-text{
        line-height: 1.5;
    }
</style>
