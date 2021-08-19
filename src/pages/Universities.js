import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { connect } from 'react-redux';

import { CardCountry } from '../components/ui/Cards';
import { BoxCenter } from '../components/ui/Box';
import { Select, Label } from '../components/ui/Select';

import { PieChart, Pie, Tooltip, Legend } from 'recharts';
import { setFilter } from '../data/actions/filter';

import { uniqueCountries, chartDataParser } from '../data/selectors/universities'

import { fetchUniversities } from '../services/UniversitiesService'
import { loadUniversities } from '../data/actions/universities';

function Universities({ universities, loaded, filter, filterOptions, setFilter, loadUniversities, chartData }) {

  useEffect(() => {
    if (!loaded) {
      fetchUniversities().then(axios.spread((...responses) => {
        const data = [...responses[0].data, ...responses[1].data, ...responses[2].data, ...responses[3].data]; //This can be improve!
        loadUniversities(data);
      }));
    }
  }, []);

  const handleFilterChange = ({ target: { value } }) => setFilter(value);

  return <>
    <h1>Universities of Latinoamerica</h1><br />
    <BoxCenter>
      <PieChart width={400} height={400}>
        <Pie data={chartData} nameKey="name" dataKey="value" fill="color" label />
        <Tooltip />
        <Legend />
      </PieChart>
    </BoxCenter>
    <>
      <Label>Choose the country you want to search  </Label>
      <Select onChange={handleFilterChange}>
        {
          filterOptions.map(country => <option key={country}>{country}</option>)
        }
      </Select></> <br />
    <CardCountry>
      <CardCountry.Body>
        <CardCountry.Title>{filter}</CardCountry.Title>
        <CardCountry.Text>
          {
            universities.map((item) => {
              if (item.country === filter || filter === 'ALL') {
                return <>
                  <li key={item.id}><span>{item.name}</span></li><br />
                </>
              }
            })
          }

        </CardCountry.Text>
      </CardCountry.Body>
    </CardCountry>

  </>
}

const mapStateToProps = ({ universities: { loaded, data }, filter }) => ({
  loaded,
  universities: data,
  filter,
  filterOptions: uniqueCountries(data),
  chartData: chartDataParser(data)
});


export default connect(mapStateToProps, { setFilter, loadUniversities })(Universities);